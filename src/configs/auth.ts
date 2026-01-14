import { env } from "../env.js";

export const authConfig = {
  jwt: {
    secret: env.JWT_SECRET_KEY,      
    expiresIn: "1d",
  },
} as const;