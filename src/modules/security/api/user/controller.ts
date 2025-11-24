import { Request, Response } from "express";
import { userUpdateSchema } from "@/modules/security/schema/user";
import { UserModel } from "@/modules/security/models/user";
import bcrypt from "bcryptjs";

export const updateUser = async (req: Request, res: Response) => {
  const parse = userUpdateSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json(parse.error.format());
  }

  const data = parse.data;

  const user = await UserModel.findOne({ email: data.email });
  if (!user) {
    return res.status(404).json({ error: "El usuario no existe" });
  }

  if (!user.password) {
    return res.status(400).json({ error: "Este usuario no tiene contraseña configurada" });
  }

  const isPasswordValid = await bcrypt.compare(
    data.verifyPassword,
    user.password ?? ""
  );

  if (!isPasswordValid) {
    return res.status(400).json({ error: "La contraseña actual es incorrecta" });
  }

  user.username = data.username || user.username;
  user.firstName = data.firstName || user.firstName;
  user.lastName = data.lastName || user.lastName;

  await user.save();

  const { password, ...userWithoutPassword } = user.toObject();

  res.status(200).json({
    message: "Usuario actualizado exitosamente",
    user: userWithoutPassword,
  });
};