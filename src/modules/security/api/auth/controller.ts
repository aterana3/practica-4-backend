import { Request, Response } from "express";
import { userCreateSchema, userLoginSchema } from "@/modules/security/schema/user";
import { UserModel } from "@/modules/security/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import { envConfig } from "@app/config";

export const registerUser = async (req: Request, res: Response) => {
  const parse = userCreateSchema.safeParse(req.body);
  if (!parse.success) {
    res.status(400).json(parse.error.format());
    return;
  }

  const data = parse.data;

  if (data.password !== data.passwordConfirm) {
    res.status(400).json({ error: "Las contraseñas no coinciden" });
    return;
  }

  const exists = await UserModel.findOne({ email: data.email });
  if (exists) {
    res.status(409).json({ error: "El email ya existe" });
    return;
  }

  data.password = await bcrypt.hash(data.password, envConfig.PASSWORD_HASH_COST);

  const user = await UserModel.create(data);

  const { password, ...userWithoutPassword } = user.toObject();

  res.status(201).json({
    message: "Usuario creado exitosamente",
    user: userWithoutPassword
  });
};

export const loginUser = async (req: Request, res: Response) => {
  const parse = userLoginSchema.safeParse(req.body);
  if (!parse.success) {
    res.status(400).json(parse.error.format());
    return;
  }

  const data = parse.data;

  const user = await UserModel.findOne({ email: data.email });
  if (!user) {
    res.status(401).json({ error: "Credenciales inválidas" });
    return;
  }

  if (!user.password) {
    res.status(401).json({ error: "Este usuario no tiene contraseña configurada" });
    return;
  }

  const isPasswordValid = await bcrypt.compare(data.password, user.password);
  if (!isPasswordValid) {
    res.status(401).json({ error: "Credenciales inválidas" });
    return;
  }

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      username: user.username,
    },
    envConfig.JWT_SECRET,
    {
      expiresIn: envConfig.JWT_EXPIRES_IN,
    } as any
  );

  const { password, ...userWithoutPassword } = user.toObject();

  res.status(200).json({
    message: "Login exitoso",
    token,
    user: userWithoutPassword
  });
};

