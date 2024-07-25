"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_bearer_token_1 = __importDefault(require("express-bearer-token"));
const path_1 = require("path");
const cors_1 = __importDefault(require("cors"));
const mongo_1 = require("@config/database/mongo");
const routes_1 = require("./routes");
const i18n = __importStar(require("i18n"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerDocument = __importStar(require("@assets/swagger/swagger.json"));
const handleError_1 = require("@config/handleErrors/handleError");
const celebrate_1 = require("celebrate");
const logger_1 = require("@config/logger/logger");
const addRequestId_1 = require("@config/addRequestId/addRequestId");
const statusError_1 = require("@config/statusError/statusError");
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.initializeSwagger();
        this.initializeI18n();
        this.setHeaders();
        this.initializeMiddleware();
        this.initializeDBConnection();
        this.initializeRoutes();
        this.overrideExpressResponse();
    }
    /**
     * Initialization of internationalization(i18n)
     * default language english.
     */
    initializeI18n() {
        i18n.configure({
            locales: ['en'],
            directory: (0, path_1.resolve)(__dirname, './assets/locales'),
        });
        this.app.use(i18n.init);
    }
    /**
     * Initialization of API's documentation.
     * We used Swagger 3.
     */
    initializeSwagger() {
        this.app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
    }
    /**
     * All express middleware goes here
     * `body-parser` = parsing request body
     * `bearerToken` = For `Basic Auth` token
     */
    initializeMiddleware() {
        this.app.use(express_1.default.json());
        this.app.use(addRequestId_1.addRequestId);
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use((0, express_bearer_token_1.default)());
        this.app.use(logger_1.morganConf);
    }
    /**
     * Handling database connection
     * In this application we are using only MongoDB with helper lib `mongoose`
     */
    initializeDBConnection() {
        (0, mongo_1.connect)();
    }
    /**
     * Basic header configuration
     * It is recommended to update this section, depending on application's needs.
     * Security Attention: Take a special care of `Allow-Origin` for production
     */
    setHeaders() {
        this.app.use((0, cors_1.default)());
    }
    /**
     * Overriding the express response.
     */
    overrideExpressResponse() {
        this.app.use((0, celebrate_1.errors)());
        this.app.use(handleError_1.handleError);
    }
    /**
     * Initializing APIs base routes.
     * APIs base path also depends on server proxy configuration.
     */
    initializeRoutes() {
        this.app.get('healthz', (req, res) => res.status(200).send({ message: 'ok' }));
        this.app.use('/api/v1', routes_1.v1Router);
        this.app.use((req, res, next) => next(statusError_1.StatusError.notFound('')));
    }
}
/**
 * Export the application.
 * We made it singleton to avoid accidental double invocation.
 */
exports.default = new App().app;
//# sourceMappingURL=app.js.map