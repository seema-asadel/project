"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.v1Router = void 0;
const express_1 = require("express");
const auth_1 = require("./auth");
const user_1 = require("./user");
const v1Router = (0, express_1.Router)();
exports.v1Router = v1Router;
v1Router.use('/auth', auth_1.authRouter);
v1Router.use('/user', user_1.userRouter);
//# sourceMappingURL=index.js.map