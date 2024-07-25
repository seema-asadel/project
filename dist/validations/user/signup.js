"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSignup = void 0;
const celebrate_1 = require("celebrate");
exports.userSignup = (0, celebrate_1.celebrate)({
    body: celebrate_1.Joi.object({
        firstName: celebrate_1.Joi.string().required().min(3),
        lastName: celebrate_1.Joi.string().required().min(3),
        email: celebrate_1.Joi.string().email().required().lowercase(),
        password: celebrate_1.Joi.string()
            .required()
            .regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/),
    }),
});
//# sourceMappingURL=signup.js.map