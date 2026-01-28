import { prisma } from "../../server";

export const getByIdPublication = async (id: number) => {
  const publication = await prisma.publication.findUnique({
    where: { id },
  });
  return publication;
};
