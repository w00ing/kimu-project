import { cleanEnv, str, port } from "envalid";

function validateEnv() {
  cleanEnv(process.env, {
    ENVIRONMENT: str(),
    MYSQL_PASSWORD_LOCAL: str(),
    MYSQL_DB_LOCAL: str(),
    MYSQL_USER_LOCAL: str(),
    MYSQL_HOST_LOCAL: str(),
    MYSQL_PASSWORD_EC2: str(),
    MYSQL_DB_EC2: str(),
    MYSQL_USER_EC2: str(),
    MYSQL_HOST_EC2: str(),
    MYSQL_PORT: port(),
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
