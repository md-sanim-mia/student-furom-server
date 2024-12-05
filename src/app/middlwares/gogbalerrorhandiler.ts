import { NextFunction, Request, Response } from "express";

const gobalErrorHandilers = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = 500;
  const message = err.message || "somthing waent wrong";

  res.status(statusCode).json({ success: false, message, erorr: err });
  return;
};

export default gobalErrorHandilers
