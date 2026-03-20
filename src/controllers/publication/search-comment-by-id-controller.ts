import { Request, Response } from "express";
import { getByIdComment } from "../../services/comment/get-by-id-comment";

export const searchCommentByIdController = async (
  req: Request,
  res: Response,
) => {
  const { id } = req.params;
  const comment = await getByIdComment(Number(id));
  return res.status(200).json(comment);
};
