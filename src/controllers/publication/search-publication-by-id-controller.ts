import { Request, Response } from "express";
import { getByIdPublication } from "../../services/publication/get-by-id-publication-service";

export const searchPublicationByIdController = async (
  req: Request,
  res: Response,
) => {
  const publicacao = await getByIdPublication(Number(req.params.id));
  return res.status(200).json(publicacao);
};
