import { prisma } from "../../server";

export const getAllPublications = async () => {
  const publications = await prisma.publication.findMany();
  return publications;
};
