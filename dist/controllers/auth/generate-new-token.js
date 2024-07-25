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
exports.generateNewToken = void 0;
const controller_1 = require("@config/controller/controller");
const index_1 = require("@services/index");
/**
 * This function is used to generate new refresh token
 * @param req
 * @param res
 */
exports.generateNewToken = (0, controller_1.controller)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(index_1.userService.generateUserTokens(req.userDetails));
}));
//# sourceMappingURL=generate-new-token.js.map