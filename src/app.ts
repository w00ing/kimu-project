import { createConnection } from "typeorm";
// import IndexRouter from "./routes/indexRouter";
import express from "express";
import bodyParser from "body-parser";
import logging from "./config/logging";
import errorMiddleware from "./middlewares/errorMiddleware";
// import indexRouter from "./routes/indexRouter";

class App {
  // public app: express.Application;
  public app: any;
  public port: number;

  constructor(ormconfig, port: number) {
    this.app = express();
    this.port = port;

    this.initializeParsing();
    this.initializeIndexRouter(ormconfig);
    this.initializeLogging();
    this.initializeCors();
    this.initializeErrorHandling();
    // this.initializeControllers(controllers);
    // this.initializeConnection(ormconfig);
  }

  private NAMESPACE = "Server";

  private initializeParsing() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
  }

  private initializeCors() {
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      );
      if (req.method == "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST PUT");
        return res.status(200).json({});
      }

      next();
    });
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }

  private initializeLogging() {
    this.app.use((req, res, next) => {
      logging.info(
        this.NAMESPACE,
        `METHOD: [${req.method}], URL: [${req.url}], IP: [${req.socket.remoteAddress}]`,
      );

      res.on("finish", () => {
        logging.info(
          this.NAMESPACE,
          `METHOD: [${req.method}], URL: [${req.url}], IP: [${req.socket.remoteAddress}], STATUS: [${res.statusCode}]`,
        );
      });

      next();
    });
  }

  private async initializeIndexRouter(ormconfig) {
    try {
      await createConnection(ormconfig);
      console.log("✅ Connected to the Database!");
      const { default: IndexRouter } = await import("./routes/indexRouter");
      this.app.use("/", IndexRouter);
    } catch (e) {
      console.log("❌ Error while connecting to the database", e);
    }
  }

  private initializeControllers(controllers) {
    controllers.forEach(controller => {
      this.app.use("/", controller.router.route);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`✅ App listening on the port ${this.port}`);
    });
  }
}

export default App;
