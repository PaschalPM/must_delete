"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allProducts = void 0;
const allProducts = (req, res) => {
    return res.status(200).json([
        {
            id: 1,
            name: "Car",
        },
        {
            id: 2,
            name: "Wristwatch",
        },
    ]);
};
exports.allProducts = allProducts;
