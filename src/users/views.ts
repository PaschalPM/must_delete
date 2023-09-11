import { Request, Response } from "express";

export const allUsers = (req: Request, res: Response) => {
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
