import { prisma } from "../../server";

export const getPublicationsById = async (userId: number) => {
  const publications = await prisma.publication.findMany({
    where: {
      authorId: userId,
    },
    include: {
      author: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return publications;
};