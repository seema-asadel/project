"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const index_1 = require("@controllers/index");
const index_2 = require("@middleware/index");
const user_1 = require("@validations/user");
const authRouter = (0, express_1.Router)();
exports.authRouter = authRouter;
authRouter.post('/', user_1.userSignup, index_1.authController.useSignUp);
authRouter.post('/login', user_1.userLogin, index_1.authController.useLogin);
authRouter.get('/token', index_2.validateUserRefreshToken, index_1.authController.generateNewToken);
//# sourceMappingURL=index.js.map