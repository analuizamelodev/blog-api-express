import { Request, Response } from "express";
import { deleteByIdComment } from "../../services/comment/delete-by-id-comment-service";
import { getUserFromToken } from "../../utils/get-user-from-token";

export const deleteCommentByIdController = async (
  req: Request,
  res: Response,
) => {
  const { valid, error, user } = getUserFromToken(req);
  if (!valid || !user) {
    return res.status(401).json({ error: error || "Invalid or missing token" });
  }
  try {
    const { id } = req.params;
    const deletar = await deleteByIdComment(Number(id));
    return res.status(200).json({
      message: "Comment successfully deleted",
      deletar,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error deleting comment" });
  }
};
