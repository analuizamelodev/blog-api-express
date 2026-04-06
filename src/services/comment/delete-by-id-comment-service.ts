import { de } from "zod/locales";
import { prisma } from "../../server";

export const deleteByIdComment = async (id: number) => {
  const deleted = await prisma.comment.delete({
    where: { id },
  });
  return deleted;
};
