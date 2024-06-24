import dotenv from "dotenv";
import { error, success } from "../utills/responseWrapper.js";
import jwt from "jsonwebtoken";
import employeeModel from "../models/employee.model.js";
dotenv.config();

const secret_key = process.env.ACCESS_SECRET_KEY;

export async function authenticate(req, res, next) {
  try {
    if (!req.headers?.authorization?.startsWith("Bearer")) {
      return res.send(error(404, "authorization header is required!"));
    }

    const accessToken = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(accessToken, secret_key);
    // console.log(decoded._doc._id);
    req._id = decoded._doc._id;
    const user = await employeeModel.findById(req._id);
    if (!user) {
      return res.send(error(404, "user not found!"));
    }
    next();
  } catch (err) {
    return res.send(error(500, err.message));
  }
}
