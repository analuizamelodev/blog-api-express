import { prisma } from "../../server";

export const createComment = async (
  content: string,
  authorId: number,
  publicationId: number,
) => {
  const newComment = await prisma.comment.create({
    data: {
      content,
      authorId,
      publicationId,
    },
  });
  return newComment;
};
