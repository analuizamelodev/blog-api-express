import { Request, Response } from "express";
import { createPublication } from "../../services/publication/create-publication-service";
import { getUserFromToken } from "../../utils/get-user-from-token";

export const createPublicationController = async (
  req: Request,
  res: Response,
) => {
  try {
    const { valid, error, user } = getUserFromToken(req);

    if (!valid || !user) {
      return res
        .status(401)
        .json({ error: error || "Invalid or missing token" });
    }

    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required" });
    }

    const publication = await createPublication(title, content, user.id);

    return res.status(201).json(publication);
  } catch (error) {
    console.error("Error creating post:", error);
    return res
      .status(500)
      .json({ error: "Internal error while creating publication" });
  }
};
