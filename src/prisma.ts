import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  log: ['query'],
})

//Irá consolar cada operação (select, insert, update, delete) que for feita no banco de dados