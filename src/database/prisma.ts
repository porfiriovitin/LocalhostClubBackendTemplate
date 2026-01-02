import { PrismaClient } from "../../prisma/generated/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import 'dotenv/config'

const connectionString = `postgresql://${process.env["POSTGRES_USER"]}:${process.env["POSTGRES_PASSWORD"]}@${process.env["POSTGRES_HOST"]}:${process.env["POSTGRES_PORT"]}/${process.env["POSTGRES_DATABASE"]}?schema=public`

const pgAdapter = new PrismaPg({connectionString})

export const prisma = new PrismaClient({adapter: pgAdapter})

