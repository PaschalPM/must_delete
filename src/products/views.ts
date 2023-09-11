import { Request, Response } from "express";

export const allProducts = (req: Request, res: Response) => {
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
