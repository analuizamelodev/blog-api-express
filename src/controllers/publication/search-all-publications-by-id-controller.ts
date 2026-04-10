import { Request, Response } from "express";
import { getPublicationsById } from "../../services/publication/get-all-publication-by-id-service";

export const searchAllPublicationsByIdController = async (
  req: Request,
  res: Response,
) => {
    const userId = Number(req.params.userId);
    const publications = await getPublicationsById(userId);
    return res.status(200).json(publications);
};   