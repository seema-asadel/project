"use strict";
/* eslint-disable lines-between-class-members */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusError = void 0;
class StatusError extends Error {
    static badRequest(message) {
        return new StatusError(400, message || 'badRequest');
    }
    static unauthorized(message) {
        return new StatusError(401, message || 'unAuthorizedAccess');
    }
    static forbidden(message) {
        return new StatusError(403, message || 'forbidden');
    }
    static notFound(message) {
        return new StatusError(404, message || 'notFound');
    }
    static serverError(message) {
        return new StatusError(500, message || 'serverError');
    }
    static badGateway(message) {
        return new StatusError(502, message || 'badGateWay');
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(code, message) {
        super(message);
        this.statusCode = code;
    }
}
exports.StatusError = StatusError;
//# sourceMappingURL=statusError.js.map