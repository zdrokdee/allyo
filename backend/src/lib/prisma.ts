import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

prisma.$connect()
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });

export default prisma;
