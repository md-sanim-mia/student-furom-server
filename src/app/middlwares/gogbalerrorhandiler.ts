import { NextFunction, Request, Response } from "express";

const gobalErrorHandilers = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = 500;
  const message = err.message || "somthing waent wrong";

  res.status(statusCode).json({ success: true, message, erorr: err });
  return;
};
