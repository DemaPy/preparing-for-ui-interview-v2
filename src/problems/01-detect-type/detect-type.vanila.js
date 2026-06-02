"use strict";
// bun test src/problems/01-detect-type/test/detect-type.test.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectType = void 0;
var detectType = function (value) {
    var _a, _b;
    if (value == null) {
        return typeof value;
    }
    var proto = Object.prototype;
    return ((_b = (_a = proto === null || proto === void 0 ? void 0 : proto.constructor) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : "object").toLowerCase();
};
exports.detectType = detectType;
// --- Examples ---
// Uncomment to test your implementation:
console.log((0, exports.detectType)(null)); // Expected: "null"
console.log((0, exports.detectType)(undefined)); // Expected: "undefined"
console.log((0, exports.detectType)(42)); // Expected: "number"
console.log((0, exports.detectType)('hello')); // Expected: "string"
console.log((0, exports.detectType)(true)); // Expected: "boolean"
console.log((0, exports.detectType)([])); // Expected: "array"
console.log((0, exports.detectType)({})); // Expected: "object"
console.log((0, exports.detectType)(new Date())); // Expected: "date"
console.log((0, exports.detectType)(new Map())); // Expected: "map"
console.log((0, exports.detectType)(new Set())); // Expected: "set"
console.log((0, exports.detectType)(/regex/)); // Expected: "regexp"
