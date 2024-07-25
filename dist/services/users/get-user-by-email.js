"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserDetailsByEmail = void 0;
const schema_1 = __importDefault(require("@modules/users/schema"));
const getUserDetailsByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const condition = {
        email: {
            // eslint-disable-next-line no-useless-escape
            $regex: new RegExp('^' + email.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + '$', 'i'),
        },
    };
    const selection = {
        __v: 0,
    };
    const userDetails = yield schema_1.default.findOne(condition, selection);
    return userDetails;
});
exports.getUserDetailsByEmail = getUserDetailsByEmail;
//# sourceMappingURL=get-user-by-email.js.map