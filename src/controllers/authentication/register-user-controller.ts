import { Request, Response } from "express";
import { getUserByEmail } from "../../services/user/get-user-by-email-service";
import { createUser } from "../../services/user/create-user-service";

export const registerUserController = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const user = await getUserByEmail(email);
  if (!user) {
    await createUser(name, email, password);

    return res.status(201).json({ message: "User successfully registered" });
  }

  res.status(400).json({ error: "User already exists" });
};
