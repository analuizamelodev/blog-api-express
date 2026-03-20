import { Request, Response } from "express";
import { getAllPublications } from "../../services/publication/get-all-publications-service";

export const searchAllPublicationsController = async (
  req: Request,
  res: Response,
) => {
  const publications = await getAllPublications();
  return res.status(200).json(publications);
};
