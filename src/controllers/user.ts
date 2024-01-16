import { Request, Response, NextFunction } from "express";
import { User } from "../models/User.js";
import { NewUserRequestBody } from "../types/types.js";

export const newUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {} = req.body;

    await User.create({});
    return res.status(200).json({
      sucess: "true",
      message: `Welcome , ${user.name}`,
    });
  } catch (err) {}
};
