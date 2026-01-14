import { PrismaClient } from "../../prisma/generated/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { env } from "../env.js";
import 'dotenv/config'

const connectionString = `postgresql://${env.POSTGRES_USER}:${env.POSTGRES_PASSWORD}@${env.POSTGRES_HOST}:${env.POSTGRES_PORT}/${env.POSTGRES_DATABASE}?schema=public`

const pgAdapter = new PrismaPg({connectionString})

export const prisma = new PrismaClient({adapter: pgAdapter})

