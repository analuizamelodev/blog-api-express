import { Request, Response } from "express";
import { getAllPublications } from "../../services/publication/get-all-publications-service";

export const searchAllPublicationsController = async (
  req: Request,
  res: Response,
) => {
  try {
    const publications = await getAllPublications();
    return res.status(200).json(publications);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error retrieving publications" });
  }
};
