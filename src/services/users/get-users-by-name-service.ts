import { prisma } from "../../server";

export async function searchUsersByName(search: string) {
  return prisma.user.findMany({
    where: {
      OR: [
        {
          name: {
            contains: search,
            mode: "insensitive",
          },
        },
      ],
    },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
}
