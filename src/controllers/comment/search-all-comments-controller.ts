import { Request, Response } from "express";
import { getAllComments } from "../../services/comment/get-all-comments-service";
export const searchAllCommentsController = async (
  req: Request,
  res: Response,
) => {
  try {
    const comments = await getAllComments();
    return res.status(200).json(comments);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error retrieving comments" });
  }
};
