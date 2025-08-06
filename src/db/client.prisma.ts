import { PrismaClient } from "@prisma/client";

// Extend the global object type to include 'prisma'
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const PrismaClientSingleton = () => {
  return new PrismaClient();
};

const globalForPrisma = globalThis as typeof globalThis & {
  prisma?: PrismaClient;
};

const prisma = globalForPrisma.prisma ?? PrismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// const prisma = new PrismaClient()
export default prisma;
