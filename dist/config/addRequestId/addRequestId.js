"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRequestId = void 0;
const uuid_1 = require("uuid");
const addRequestId = (req, _res, next) => {
    if (!req.get('request-id')) {
        const id = (0, uuid_1.v4)().split('-')[0];
        req.headers['request-id'] = id;
    }
    next();
};
exports.addRequestId = addRequestId;
//# sourceMappingURL=addRequestId.js.map