import jwt from "jsonwebtoken";

export function verifyToken(token) {
  const secretKey = process.env.JWT_SECRET;

  if (!secretKey) {
    throw new Error("JWT secret key is not defined in environment variables");
  }

  try {
    return jwt.verify(token, secretKey); // decoded payload (user info, etc.)
  } catch (error) {
    return null;
  }
}
