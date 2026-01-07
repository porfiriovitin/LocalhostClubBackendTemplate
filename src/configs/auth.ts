const secretKey = process.env.JWT_SECRET_KEY;

if (!secretKey) {
  throw new Error("Missing env var JWT_SECRET_KEY");
}

export const authConfig = {
  jwt: {
    secretKey,      
    expiresIn: "1d",
  },
} as const;