export const allUsers = (req, res) => {
    return res.status(200).json([
        {
            id: 1,
            firstname: "Paschal",
            lastname: "Okafor",
        },
        {
            id: 2,
            firstname: "Taslim",
            lastname: "Eze",
        },
    ]);
};
