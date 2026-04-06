import { prisma } from "../../server";

export const deleteByIdPublication = async (id: number, userId: number) => {
  const publication = await prisma.publication.findUnique({ where: { id } });

  if (!publication) throw new Error("Publication not found");
  if (publication.authorId !== userId) throw new Error("Unauthorized");

  await prisma.comment.deleteMany({ where: { publicationId: id } });
  return await prisma.publication.delete({ where: { id } });
};