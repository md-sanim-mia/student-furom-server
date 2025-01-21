import confing from "../confing";
import { Users } from "../modules/users/users.model";
import { asyncCatch } from "../utility/async.catch";
import jwt, { JwtPayload } from "jsonwebtoken";
const auth = (...requireRole: string[]) => {
  return asyncCatch(async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      throw new Error("you are not authorization");
    }

    const decoded = jwt.verify(token, confing.jwt_scrict as string);
    const { email, role } = decoded as JwtPayload;
    const isExist = await Users.findOne({ email, role }).select("-password");

    if (!isExist) {
      throw new Error("you are not authorization");
    }
    if (requireRole && !requireRole.includes(role)) {
      throw new Error("you are not authorization");
    }
    req.user = decoded as JwtPayload;
    next();
  });
};

export default auth;
