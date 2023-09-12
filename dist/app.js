"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_js_1 = __importDefault(require("./users/router.js"));
const router_js_2 = __importDefault(require("./products/router.js"));
const app = (0, express_1.default)();
app.use("/api", router_js_1.default);
app.use('/api', router_js_2.default);
// app.listen(7000, ()=> console.log('listening'))
exports.default = app;
