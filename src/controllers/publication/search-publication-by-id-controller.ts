import { Request, Response } from "express";
import { getByIdPublication } from "../../services/publication/get-by-id-publication-service";

export const searchPublicationByIdController = async (
  req: Request,
  res: Response,
) => {
  try {
    const publicacao = await getByIdPublication(Number(req.params.id));
    return res.status(200).json(publicacao);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error retrieving publications" });
  }
};
