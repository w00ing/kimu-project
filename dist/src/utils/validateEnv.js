"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var envalid_1 = require("envalid");
function validateEnv() {
    envalid_1.cleanEnv(process.env, {
        ENVIRONMENT: envalid_1.str(),
        MYSQL_PASSWORD_LOCAL: envalid_1.str(),
        MYSQL_DB_LOCAL: envalid_1.str(),
        MYSQL_USER_LOCAL: envalid_1.str(),
        MYSQL_HOST_LOCAL: envalid_1.str(),
        MYSQL_PASSWORD_EC2: envalid_1.str(),
        MYSQL_DB_EC2: envalid_1.str(),
        MYSQL_USER_EC2: envalid_1.str(),
        MYSQL_HOST_EC2: envalid_1.str(),
        MYSQL_PORT: envalid_1.port(),
        SERVER_HOSTNAME: envalid_1.str(),
        SERVER_PORT: envalid_1.port(),
        JWT_SECRET: envalid_1.str(),
        JWT_EXPIRATION: envalid_1.str(),
        JWT_ISSUER: envalid_1.str(),
        S3_KEY: envalid_1.str(),
        S3_SECRET: envalid_1.str(),
        S3_REGION: envalid_1.str(),
    });
}
exports.default = validateEnv;
//# sourceMappingURL=validateEnv.js.map