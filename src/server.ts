import serverConfig from "./config/serverConfig";
import App from "./app";
import validateEnv from "./utils/validateEnv";
import ormconfig from "./config/ormconfig";
validateEnv();

const app = new App(ormconfig, Number(serverConfig.server.port));
app.listen();
