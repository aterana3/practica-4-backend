import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { envConfig } from '@app/config'

export function auth(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization
  const token = header ? header.split(' ')[1] : undefined

  if (!token) {
    res.status(401).json({ error: 'Token no proporcionado' })
    return
  }

  try {
    const payload = jwt.verify(token, envConfig.JWT_SECRET) as any;
    (req as any).user = {
      _id: payload.id,
      email: payload.email,
      username: payload.username
    }
    next()
  } catch (error) {
    res.status(401).json({ error: 'Token inválido o expirado' })
  }
}
