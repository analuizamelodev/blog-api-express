import { prisma } from "../../server";

export const deleteByIdComment = async (id: number) => {
  await prisma.comment.delete({
    where: { id },
  });
};
