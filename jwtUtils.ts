//Funções para gerar e verificar tokens JWT.

import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'seuSegredoSuperSeguro';

export const generateToken = (userId: string) => {
  return jwt.sign({ userId }, secret, { expiresIn: '1h' });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, secret);
};
