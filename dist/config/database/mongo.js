"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const logger_1 = require("@config/logger/logger");
const mongoose_1 = __importDefault(require("mongoose"));
const env_1 = require("@config/env");
/**
 * This function is used for connecting database
 */
const connect = () => {
    mongoose_1.default.connect(env_1.envs.db.connectionURL, env_1.envs.db.option, function (err) {
        if (err) {
            logger_1.logger.error('Mongo DB Connection Error', err);
        }
        else {
            logger_1.logger.info('Mongo DB Connected');
        }
    });
};
exports.connect = connect;
//# sourceMappingURL=mongo.js.map