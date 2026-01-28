import { prisma } from "../../server";

export const deleteByIdPublication = async (id: number) => {
  const deletePublication = await prisma.publication.delete({
    where: { id },
  });

  return deletePublication;
};
