import dotenv from "dotenv";
dotenv.config();

const data = {
  ALLOWED_SITES: process.env.ALLOWED_WESBITES,
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_ISSUER: process.env.JWT_ISSUER ?? "Aaditya",
};

export default data;
