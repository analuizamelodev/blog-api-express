import { Request, Response } from "express";
import { getUserFromToken } from "../../utils/get-user-from-token";
import { deleteByIdPublication } from "../../services/publication/delete-by-id-publication-service";

export const deletePublicationByIdController = async (
  req: Request,
  res: Response,
) => {
  try {
    const { valid, error, user } = getUserFromToken(req);

    if (!valid || !user) {
      return res.status(401).json({ error });
    }

    const { id } = req.params;

    const deleted = await deleteByIdPublication(Number(id));

    return res.status(200).json({
      message: "Publication successfully deleted",
      deleted,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error deleting publication" });
  }
};
