// controllers/users.controller.ts
import { Request, Response } from "express";
import { searchUsersByName } from "../../services/users/get-users-by-name-service";

export async function searchUsersByNameController(req: Request, res: Response) {
  const { search } = req.query;

  if (!search || typeof search !== "string") {
    return res.json([]);
  }

  const users = await searchUsersByName(search);
  return res.json(users);
}
