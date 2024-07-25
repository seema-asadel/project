"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUserTokens = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("@config/env");
const generateUserTokens = (userDetails) => {
    const accessTokenExpiry = env_1.envs.jwt.accessToken.expiry;
    const refreshTokenExpiry = env_1.envs.jwt.refreshToken.expiry;
    const accessToken = jsonwebtoken_1.default.sign({ id: userDetails._id, name: userDetails.name, email: userDetails.email }, env_1.envs.jwt.accessToken.secret, { expiresIn: accessTokenExpiry });
    const refreshToken = jsonwebtoken_1.default.sign({ id: userDetails._id, name: userDetails.name, email: userDetails.email }, env_1.envs.jwt.refreshToken.secret, { expiresIn: refreshTokenExpiry });
    return {
        accessToken: accessToken,
        accessTokenExpiry: accessTokenExpiry,
        refreshToken: refreshToken,
        refreshTokenExpiry: refreshTokenExpiry,
        name: userDetails.name,
        email: userDetails.email,
    };
};
exports.generateUserTokens = generateUserTokens;
//# sourceMappingURL=create-user-token.js.map