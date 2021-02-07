"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var detect_ts_node_1 = __importDefault(require("detect-ts-node"));
var env = process.env.ENVIRONMENT;
console.log(env);
var commonConfig = {};
if (env === "local") {
    commonConfig = {
        type: "mysql",
        host: process.env.MYSQL_HOST_LOCAL,
        port: Number(process.env.MYSQL_PORT),
        username: process.env.MYSQL_USER_LOCAL,
        password: process.env.MYSQL_PASSWORD_LOCAL,
        database: process.env.MYSQL_DB_LOCAL,
        synchronize: true,
    };
}
else if (env === "dist") {
    commonConfig = {
        type: "mysql",
        host: process.env.MYSQL_HOST_EC2,
        port: Number(process.env.MYSQL_PORT),
        username: process.env.MYSQL_USER_EC2,
        password: process.env.MYSQL_PASSWORD_EC2,
        database: process.env.MYSQL_DB_EC2,
        synchronize: true,
    };
}
var srcConfig = {
    entities: ["src/entity/**/*.ts"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
    seeds: ["src/seeds/**/*.ts"],
    factories: ["src/factories/**/*.ts"],
    cli: {
        entitiesDir: "src/entity",
        migrationsDir: "src/migration",
        subscribersDir: "src/subscriber",
    },
};
var distConfig = {
    entities: ["dist/src/entity/**/*.js"],
    migrations: ["dist/src/migration/**/*.js"],
    subscribers: ["dist/src/subscriber/**/*.js"],
    seeds: ["dist/src/seeds/**/*.js"],
    factories: ["dist/src/factories/**/*.js"],
    cli: {
        entitiesDir: "dist/src/entity",
        migrationsDir: "dist/src/migration",
        subscribersDir: "dist/src/subscriber",
    },
};
var ormconfig = {};
var key;
// Append common configs to final object
for (key in commonConfig) {
    if (commonConfig.hasOwnProperty(key)) {
        ormconfig[key] = commonConfig[key];
    }
}
if (detect_ts_node_1.default) {
    // if ts-node append src configuration
    for (key in srcConfig) {
        if (srcConfig.hasOwnProperty(key)) {
            ormconfig[key] = srcConfig[key];
        }
    }
}
else {
    // else append dist configuration
    for (key in distConfig) {
        if (distConfig.hasOwnProperty(key)) {
            ormconfig[key] = distConfig[key];
        }
    }
}
exports.default = ormconfig;
//# sourceMappingURL=ormconfig.js.map