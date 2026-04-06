import { prisma } from "../../server";

export const updateByIdPublication = async (
  id: number,
  userId: number,
  data: { title: string; content: string },
) => {
  const publication = await prisma.publication.findUnique({ where: { id } });

  if (!publication) throw new Error("Publication not found");
  if (publication.authorId !== userId) throw new Error("Unauthorized");

  return await prisma.publication.update({ where: { id }, data });
};