import {z} from "zod";
import 'dotenv/config';

const envSchema = z.object({
    POSTGRES_USER:z.string(),
    POSTGRES_HOST: z.string(),
    POSTGRES_DATABASE: z.string(),
    POSTGRES_PASSWORD: z.string(),
    POSTGRES_PORT: z.string(),
    CONTAINER_NAME: z.string(),
    JWT_SECRET_KEY: z.string(),
})

export const env = envSchema.parse(process.env);