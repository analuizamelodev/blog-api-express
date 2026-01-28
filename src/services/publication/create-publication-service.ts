import { prisma } from "../../server";

export const createPublication = async (
  title: string,
  content: string,
  authorId: number,
) => {
  const newPublication = await prisma.publication.create({
    data: {
      title,
      content,
      authorId,
    },
  });

  return newPublication;
};
