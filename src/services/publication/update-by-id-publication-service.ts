import { prisma } from "../../server";

export const updateByIdPublication = async (
  id: number,
  data: { title: string; content: string },
) => {
  return await prisma.publication.update({
    where: { id },
    data,
  });
};
