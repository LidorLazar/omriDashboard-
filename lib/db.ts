import { PrismaClient } from '@prisma/client';

declare global {
    //@ts-ignore
    const prisma = new PrismaClient({
        log: ['query']
    })

}

const prisma = new PrismaClient();

export const db = prisma;