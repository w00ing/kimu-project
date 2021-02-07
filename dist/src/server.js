"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var serverConfig_1 = __importDefault(require("./config/serverConfig"));
var app_1 = __importDefault(require("./app"));
var validateEnv_1 = __importDefault(require("./utils/validateEnv"));
var ormconfig_1 = __importDefault(require("./config/ormconfig"));
validateEnv_1.default();
var app = new app_1.default(ormconfig_1.default, Number(serverConfig_1.default.server.port));
app.listen();
//# sourceMappingURL=server.js.map