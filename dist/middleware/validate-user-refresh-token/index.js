"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserRefreshToken = void 0;
const index_1 = require("@services/index");
const middleware_1 = require("@config/middleware/middleware");
const statusError_1 = require("@config/statusError/statusError");
const env_1 = require("@config/env");
/**
 * This function is used for validating X-API-KEY header
 * @param req
 * @param res
 * @param next
 */
exports.validateUserRefreshToken = (0, middleware_1.middleware)((req) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.token;
    if (!token) {
        throw statusError_1.StatusError.forbidden('');
    }
    const decodedData = yield index_1.userService
        .verifyUserToken(token, env_1.envs.jwt.refreshToken.secret)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .catch((_err) => {
        throw statusError_1.StatusError.unauthorized('');
    });
    if (!decodedData) {
        throw statusError_1.StatusError.unauthorized('');
    }
    const userDetails = yield index_1.userService.getUserDetailsById(decodedData.id);
    if (!userDetails) {
        throw statusError_1.StatusError.unauthorized('');
    }
    req['userDetails'] = userDetails;
}));
//# sourceMappingURL=index.js.map