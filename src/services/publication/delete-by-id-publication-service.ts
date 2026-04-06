import { prisma } from "../../server";

export const deleteByIdPublication = async (id: number) => {
  await prisma.comment.deleteMany({ where: { publicationId: id } });

  const deleted = await prisma.publication.delete({ where: { id } });

  return deleted;
};