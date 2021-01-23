import { User } from "./entity/User";
import serverConfig from "./config/serverConfig";
import App from "./app";
import validateEnv from "./utils/validateEnv";
import ormconfig from "./config/ormconfig";

validateEnv();

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

const app = new App(ormconfig, Number(serverConfig.server.port));
app.listen();
