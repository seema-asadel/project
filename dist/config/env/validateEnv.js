"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const celebrate_1 = require("celebrate");
(0, dotenv_1.config)();
const envVarsSchema = celebrate_1.Joi.object()
    .keys({
    NODE_ENV: celebrate_1.Joi.string().valid('prod', 'dev', 'test').required(),
    NODE_PORT: celebrate_1.Joi.number().required().default(4000),
    MONGO_CONNECTION_URL: celebrate_1.Joi.string().required(),
    PASSWORD_SALT_ROUND: celebrate_1.Joi.number().required().default(10),
    USER_ACCESS_TOKEN_SECRET: celebrate_1.Joi.string().required().min(15),
    ACCESS_TOKEN_EXPIRED: celebrate_1.Joi.number().required(),
    USER_REFRESH_TOKEN_SECRET: celebrate_1.Joi.string().required().min(15),
    REFRESH_TOKEN_EXPIRED: celebrate_1.Joi.number().required(),
    SMTP_AUTH_EMAIL: celebrate_1.Joi.string().email().optional(),
    SMTP_AUTH_PASSWORD: celebrate_1.Joi.string().optional(),
    SMTP_HOST: celebrate_1.Joi.string().optional(),
    SMTP_PORT: celebrate_1.Joi.number().optional(),
})
    .unknown();
const { error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);
if (error) {
    throw new Error(`Config validation error ${error.message}`);
}
//# sourceMappingURL=validateEnv.js.map