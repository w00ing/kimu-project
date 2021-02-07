import detectTSNode from "detect-ts-node";

const env = process.env.ENVIRONMENT;
console.log(env);

let commonConfig = {};
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
} else if (env === "dist") {
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

const srcConfig = {
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

const distConfig = {
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

const ormconfig = {};
let key: any;

// Append common configs to final object
for (key in commonConfig) {
  if (commonConfig.hasOwnProperty(key)) {
    ormconfig[key] = commonConfig[key];
  }
}

if (detectTSNode) {
  // if ts-node append src configuration
  for (key in srcConfig) {
    if (srcConfig.hasOwnProperty(key)) {
      ormconfig[key] = srcConfig[key];
    }
  }
} else {
  // else append dist configuration
  for (key in distConfig) {
    if (distConfig.hasOwnProperty(key)) {
      ormconfig[key] = distConfig[key];
    }
  }
}

export default ormconfig;
