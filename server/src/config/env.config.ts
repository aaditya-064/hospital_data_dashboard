import "dotenv/config";

const ENV_CONFIG = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  APP_NAME: process.env.APP_NAME,
  FRONT_END_URL: process.env.FRONT_END_URL,
  ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS,

  //* Database
  DB_URI: process.env.DB_URI!!,

  //* jwt
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN!!,
};

export default ENV_CONFIG;
