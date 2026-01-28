import { prisma } from "../../server";

export const getByIdComment = async (id: number) => {
  const comment = await prisma.comment.findUnique({
    where: { id },
  });
  return comment;
};
