import { PrismaClient } from '@/app/generated/prisma'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'], // Optional: logs all queries in dev
  })

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}
 