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
exports.useSignUp = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const controller_1 = require("@config/controller/controller");
const statusError_1 = require("@config/statusError/statusError");
const index_1 = require("@services/index");
const env_1 = require("@config/env");
exports.useSignUp = (0, controller_1.controller)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    // get user details by email
    const userDetails = yield index_1.userService.getUserDetailsByEmail(body.email);
    if (userDetails) {
        throw statusError_1.StatusError.badRequest('duplicateEmail');
    }
    body.password = yield bcrypt_1.default.hash(body.password, env_1.envs.passwordSalt);
    const user = yield index_1.userService.saveUser(body);
    res.send({ name: user.name, email: user.email });
}));
//# sourceMappingURL=create-account.js.map