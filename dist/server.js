"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const app_1 = __importDefault(require("./app"));
const logger_1 = require("@config/logger/logger");
require("@config/env/validateEnv");
const env_1 = require("@config/env");
app_1.default.listen(env_1.envs.port, () => {
    logger_1.logger.info(`Express server listening on port ${env_1.envs.port}`);
});
//# sourceMappingURL=server.js.map