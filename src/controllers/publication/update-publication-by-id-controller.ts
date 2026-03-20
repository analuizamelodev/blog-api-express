import { Request, Response } from "express";
import { updateByIdPublication } from "../../services/publication/update-by-id-publication-service";
import { getUserFromToken } from "../../utils/get-user-from-token";

export const updatePublicationByIdController = async (
  req: Request,
  res: Response,
) => {
  const { valid, error, user } = getUserFromToken(req);
  if (!valid || !user) {
    return res.status(401).json({ error: error || "Invalid or missing token" });
  }
  const { id } = req.params;
  const { title, content } = req.body;
  const updatedPublication = await updateByIdPublication(Number(id), {
    title,
    content,
  });
  return res.status(200).json(updatedPublication);
};
