"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const index_1 = require("@controllers/index");
const index_2 = require("@middleware/index");
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
userRouter.get('/me', index_2.validateUserAccessToken, index_1.userController.getCurrentUser);
//# sourceMappingURL=index.js.map