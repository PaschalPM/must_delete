export const allProducts = (req, res) => {
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
