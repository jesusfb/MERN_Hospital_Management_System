import { User } from "../models/userSchema.js";
import { catchAsyncErrors } from "./catchAsyncErrors.js";
import ErrorHandler from "./error.js";
import jwt from "jsonwebtoken";


// Middleware to authenticate dashboard users
export const isAdminAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const token = req.cookies.adminToken;

  if (!token) {
    return next(new ErrorHandler("Admin is not authenticated!", 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await User.findById(decoded.id);

  if (!req.user || req.user.role !== "Admin") {
    return next(new ErrorHandler("Unauthorized access", 403));
  }

  next();
});

// Middleware to authenticate frontend users
export const isPatientAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const token = req.cookies.patientToken;

  if (!token) {
    return next(new ErrorHandler("User is not authenticated!", 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id);

    if (!req.user || req.user.role !== "Patient") {
      return next(new ErrorHandler("Unauthorized access", 403));
    }

    next();
  } catch (error) {
    return next(new ErrorHandler("Invalid token", 401));
  }
});
