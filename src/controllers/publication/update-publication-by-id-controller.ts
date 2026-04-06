import { Request, Response } from "express";
import { updateByIdPublication } from "../../services/publication/update-by-id-publication-service";
import { getUserFromToken } from "../../utils/get-user-from-token";

export const updatePublicationByIdController = async (req: Request, res: Response) => {
  const { valid, error, user } = getUserFromToken(req);
  if (!valid || !user) return res.status(401).json({ error });

  try {
    const { title, content } = req.body;
    const updated = await updateByIdPublication(Number(req.params.id), user.id, { title, content });
    return res.status(200).json(updated);
  } catch (err: any) {
    const status = err.message === "Unauthorized" ? 403 : 404;
    return res.status(status).json({ error: err.message });
  }
};