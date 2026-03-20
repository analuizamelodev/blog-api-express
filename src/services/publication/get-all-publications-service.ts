import { prisma } from "../../server";

export const getAllPublications = async () => {
  const publications = await prisma.publication.findMany({
    include: {
      author: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });
  return publications;
};
