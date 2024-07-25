"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUserToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const verifyUserToken = (token, tokenSecret) => {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.verify(token, tokenSecret, (err, decodeData) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(decodeData);
            }
        });
    });
};
exports.verifyUserToken = verifyUserToken;
//# sourceMappingURL=verify-token.js.map