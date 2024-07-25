"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const logger_1 = require("@config/logger/logger");
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
const handleError = (err, req, res, next) => {
    let message;
    let status;
    if (err.statusCode) {
        message = err.message || 'serverError';
        status = err.statusCode;
    }
    else {
        logger_1.logger.error(JSON.stringify({ message: err.message, stack: err.stack }));
        message = 'serverError';
        status = 500;
    }
    res.locals.error = res.__(message);
    res.status(status).send({ error: res.__(message), timestamp: new Date().toISOString() });
};
exports.handleError = handleError;
//# sourceMappingURL=handleError.js.map