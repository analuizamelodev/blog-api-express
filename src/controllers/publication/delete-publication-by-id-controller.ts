import { Request, Response } from "express";
import { getUserFromToken } from "../../utils/get-user-from-token";
import { deleteByIdPublication } from "../../services/publication/delete-by-id-publication-service";

export const deletePublicationByIdController = async (req: Request, res: Response) => {
  const { valid, error, user } = getUserFromToken(req);
  if (!valid || !user) return res.status(401).json({ error });

  try {
    const deleted = await deleteByIdPublication(Number(req.params.id), user.id);
    return res.status(200).json({ message: "Publication successfully deleted", deleted });
  } catch (err: any) {
    const status = err.message === "Unauthorized" ? 403 : 404;
    return res.status(status).json({ error: err.message });
  }
};