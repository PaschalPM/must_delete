"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const views_js_1 = require("./views.js");
const router = (0, express_1.Router)();
router.route("/products").get(views_js_1.allProducts);
exports.default = router;
