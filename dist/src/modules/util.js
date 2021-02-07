"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = {
    success: function (status, message, data) {
        return {
            status: status,
            success: true,
            message: message,
            data: data,
        };
    },
    fail: function (status, message) {
        return {
            status: status,
            success: false,
            message: message,
        };
    },
};
exports.default = util;
//# sourceMappingURL=util.js.map