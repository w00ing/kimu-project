import { cleanEnv, str, port } from "envalid";

function validateEnv() {
  cleanEnv(process.env, {
    ENVIRONMENT: str(),
    MYSQL_PASSWORD: str(),
    MYSQL_DB: str(),
    MYSQL_USER: str(),
    MYSQL_HOST: str(),
    SERVER_HOSTNAME: str(),
    SERVER_PORT: port(),
    JWT_SECRET: str(),
    JWT_EXPIRATION: str(),
    JWT_ISSUER: str(),
    S3_KEY: str(),
    S3_SECRET: str(),
    S3_REGION: str(),
  });
}

export default validateEnv;
