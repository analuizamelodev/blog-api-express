import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { getUserByEmail } from "../../services/user/get-user-by-email-service";

const SECRET = "minha_chave_super_secreta";

export const loginUserController = async (req: Request, res: Response) => {
  const { email, senha } = req.body;
  const user = await getUserByEmail(email);

  if (user && user.password === senha) {
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET, {
      expiresIn: "1h",
    });

    return res.json({ token });
  }

  res.status(401).json({ error: "Invalid credentials" });
};
