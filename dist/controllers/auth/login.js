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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLogin = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const controller_1 = require("@config/controller/controller");
const statusError_1 = require("@config/statusError/statusError");
const index_1 = require("@services/index");
exports.useLogin = (0, controller_1.controller)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reqBody = req.body;
    // get user details by email
    const userDetails = yield index_1.userService.getUserDetailsByEmail(reqBody.email);
    if (!userDetails) {
        throw statusError_1.StatusError.badRequest('invalidEmailOrPassword');
    }
    // password compare process
    const isSame = yield bcrypt_1.default.compare(reqBody.password, userDetails.password);
    if (!isSame) {
        throw statusError_1.StatusError.badRequest('invalidEmailOrPassword');
    }
    res.send(index_1.userService.generateUserTokens(userDetails));
}));
//# sourceMappingURL=login.js.map