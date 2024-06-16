import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export function getTask(id: string) {
  if (!id) return null;
  if (isNaN(Number(id))) return null;

  return prisma.tasks.findUnique({
    where: {
      id: Number(id),
    },
  });
}
