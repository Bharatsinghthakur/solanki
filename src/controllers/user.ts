import { Request, Response, NextFunction } from "express";
import { User } from "../models/user.js";
import { NewUserRequestBody } from "../types/types.js";

export const newUser = async (
  req: Request<{}, {}, NewUserRequestBody>,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("working", req.body);
    const { name, email, photo, gender, _id, dob } = req.body;

    const user = await User.create({
      name,
      email,
      photo,
      gender,
      _id,
      dob,
    });

    return res.status(200).json({
      sucess: "true",
      message: `Welcome , ${user.name}`,
    });
  } catch (err) {
    console.log(err, "error here");
    return res.status(400).json({
      sucess: "false",
      message: `error `,
    });
  }
};
