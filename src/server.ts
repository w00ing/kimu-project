import { createConnection } from "typeorm";
import serverConfig from "./config/serverConfig";
import App from "./app";
import validateEnv from "./utils/validateEnv";
import ormconfig from "./config/ormconfig";

validateEnv();

(async () => {
  try {
    await createConnection(ormconfig);
    console.log("✅ Connected to the Database!");
  } catch (error) {
    console.log("Error while connecting to the database", error);
    return error;
  }
  const app = new App([], Number(serverConfig.server.port));
  app.listen();
})();
