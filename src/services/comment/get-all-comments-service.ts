import { prisma } from "../../server";

export const getAllComments = async () => {
  const comments = await prisma.comment.findMany();
  return comments;
};
