"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var logging_1 = __importDefault(require("./config/logging"));
var errorMiddleware_1 = __importDefault(require("./middlewares/errorMiddleware"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var swaggerDocs_1 = __importDefault(require("./swagger/swaggerDocs"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var App = /** @class */ (function () {
    function App(ormconfig, port) {
        // public app: express.Application;
        this.app = express_1.default();
        this.NAMESPACE = "Server";
        // this.app = express();
        this.port = port;
        this.initializeParsing();
        this.initializeLogging();
        this.initializeCors();
        this.initializeConnection(ormconfig);
    }
    App.prototype.initializeParsing = function () {
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use(body_parser_1.default.json());
        this.app.use(cookie_parser_1.default());
    };
    App.prototype.initializeCors = function () {
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            if (req.method == "OPTIONS") {
                res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST PUT");
                return res.status(200).json({});
            }
            next();
        });
    };
    App.prototype.initializeLogging = function () {
        var _this = this;
        this.app.use(function (req, res, next) {
            logging_1.default.info(_this.NAMESPACE, "METHOD: [" + req.method + "], URL: [" + req.url + "], IP: [" + req.socket.remoteAddress + "]");
            res.on("finish", function () {
                logging_1.default.info(_this.NAMESPACE, "METHOD: [" + req.method + "], URL: [" + req.url + "], IP: [" + req.socket.remoteAddress + "], STATUS: [" + res.statusCode + "]");
            });
            next();
        });
    };
    App.prototype.initializeConnection = function (ormconfig) {
        return __awaiter(this, void 0, void 0, function () {
            var IndexRouter, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, typeorm_1.createConnection(ormconfig)];
                    case 1:
                        _a.sent();
                        console.log("✅ Connected to the Database!");
                        return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("./routes/indexRouter")); })];
                    case 2:
                        IndexRouter = (_a.sent()).default;
                        this.app.use("/kimu/api/v1", IndexRouter);
                        this.app.use(errorMiddleware_1.default);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log("❌ Error while connecting to the database", e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            _this.app.use("/swagger", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs_1.default));
            console.log("\u2705 Listening on the PORT: " + _this.port);
        });
    };
    return App;
}());
exports.default = App;
//# sourceMappingURL=app.js.map