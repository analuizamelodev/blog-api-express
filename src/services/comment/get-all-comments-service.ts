import { prisma } from "../../server";

export const getAllComments = async () => {
  const comments = await prisma.comment.findMany({
    include: {
      author: true,
    },
  });

  return comments;
};
