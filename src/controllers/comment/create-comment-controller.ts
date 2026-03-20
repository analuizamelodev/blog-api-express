import { Request, Response } from "express";
import { createComment } from "../../services/comment/create-comment-service";
import { getUserFromToken } from "../../utils/get-user-from-token";

export const createCommentController = async (req: Request, res: Response) => {
  const { valid, error, user } = getUserFromToken(req);
  if (!valid || !user) {
    return res.status(401).json({ error: error || "Invalid or missing token" });
  }
  const { publicationId, userId, content } = req.body;
  const comment = await createComment(content, userId, publicationId);
  return res.status(201).json(comment);
};
