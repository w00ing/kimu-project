import { createConnection } from "typeorm";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import logging from "./config/logging";
import errorMiddleware from "./middlewares/errorMiddleware";
import cookieParser from "cookie-parser";
import swaggerDocs from "./swagger/swaggerDocs";
import swaggerUi from "swagger-ui-express";

class App {
  // public app: express.Application;
  public app = express();
  public use: any;
  public port: number;

  constructor(ormconfig: {}, port: number) {
    // this.app = express();
    this.port = port;

    this.initializeParsing();
    this.initializeLogging();
    this.initializeCors();
    this.initializeConnection(ormconfig);
  }

  private NAMESPACE = "Server";

  private initializeParsing() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
  }

  private initializeCors() {
    const corsWhitelist = ["http://localhost:3000"];
    this.app.use(
      cors({
        origin: (origin, callback) => {
          if (corsWhitelist.indexOf(origin) !== -1) {
            callback(null, true);
          } else {
            callback(new Error("Not allowed origin"));
          }
        },
        credentials: true,
      }),
    );
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

  private async initializeConnection(ormconfig) {
    try {
      await createConnection(ormconfig);
      console.log("✅ Connected to the Database!");
      const { default: IndexRouter } = await import("./routes/indexRouter");
      this.app.use("/kimu/api/v1", IndexRouter);
      this.app.use(errorMiddleware);
    } catch (e) {
      console.log("❌ Error while connecting to the database", e);
    }
  }

  public listen() {
    this.app.listen(this.port, () => {
      this.app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
      console.log(`✅ Listening on the PORT: ${this.port}`);
    });
  }
}

export default App;
