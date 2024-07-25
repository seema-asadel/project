"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.morganConf = exports.logger = void 0;
const morgan_1 = __importDefault(require("morgan"));
const split2_1 = __importDefault(require("split2"));
const winston_1 = require("winston");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const logger = (0, winston_1.createLogger)({
    transports: [
        new winston_1.transports.Console({
            format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json()),
        }),
    ],
    exitOnError: false,
});
exports.logger = logger;
morgan_1.default.token('content', (req, res) => {
    if (!res.statusCode) {
        return '-';
    }
    if (res.statusCode < 400) {
        return res.get('content-length');
    }
    return res.locals.error || '-';
});
const morganFormat = 'HTTP :req[request-id] :method :url :status :content - :response-time ms';
const stream = (0, split2_1.default)().on('data', (line) => logger.info(line));
logger.stream(stream);
const morganConf = (0, morgan_1.default)(morganFormat, { stream });
exports.morganConf = morganConf;
//# sourceMappingURL=logger.js.map