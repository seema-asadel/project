"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogin = void 0;
const celebrate_1 = require("celebrate");
exports.userLogin = (0, celebrate_1.celebrate)({
    body: celebrate_1.Joi.object({
        email: celebrate_1.Joi.string().email().required().lowercase(),
        password: celebrate_1.Joi.string().required().min(6),
    }),
});
//# sourceMappingURL=login.js.map