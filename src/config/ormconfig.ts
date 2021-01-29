const ormconfig = {
  type: "mysql",
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  entities: ["src/entity/**/*.ts"],
  synchronize: true,
  migrationsTableName: "_migrations",
  migrations: ["src/_migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  seeds: ["src/seeds/**/*{.ts,.js}"],
  factories: ["src/factories/**/*{.ts,.js}"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/_migration",
    subscribersDir: "src/subscriber",
  },
};

export default ormconfig;
