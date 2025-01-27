import queryBuilders from "../../builder/queryBuilder";
import confing from "../../confing";
import { ObjectId } from "mongodb";
import { userSearchbleFields } from "./users.const";
import { Users } from "./users.model";
import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";
import { TchengePassword, TLinks, TUpdateUser, TUser } from "./users.interface";
import { createToken } from "./user.utils";
import { sendEmail } from "../../utility/sendEmail";
import { BloodRequest } from "../bloodRequest/blood.request.model";
import { BookModel } from "../Book/book.model";
const createUserForDb = async (playood: TUser) => {
  const isExist = await Users.findOne({ email: playood.email });
  if (isExist) {
    throw new Error("This email address is already registered. ");
  }
  const result = await Users.create(playood);
  return result;
};

const getAllUsersForDb = async (query: Record<string, unknown>) => {
  const userQuery = new queryBuilders(Users.find().select("-password"), query)
    .search(userSearchbleFields)
    .filter()
    .sort()
    .paginate();

  const result = await userQuery?.modelQuery;

  return result;
};

const getSingleUsersForDb = async (userId: string) => {
  const result = await Users.findOne({ email: userId }).select("-password");
  return result;
};

const updateSingleUsersForDb = async (userId: string, playood: TUpdateUser) => {
  const result = await Users.findByIdAndUpdate(userId, playood, {
    new: true,
  }).select("-password");
  return result;
};

const deleteSingleUsersForDb = async (userId: string) => {
  const result = await Users.findByIdAndDelete(userId);
  return result;
};

const blockSingleUsersForDb = async (userId: string) => {
  const result = await Users.updateOne(
    { _id: userId },
    {
      $set: { status: "block" },
    }
  ).select("-password");
  return result;
};

const activekSingleUsersForDb = async (userId: string) => {
  const result = await Users.updateOne(
    { _id: userId },
    {
      $set: { status: "in-progress" },
    }
  ).select("-password");
  return result;
};

const addDesignationSingleUsersForDb = async (
  userId: string,
  playood: string
) => {
  const result = await Users.updateOne(
    { _id: userId },
    {
      $set: { designation: playood },
    },
    {
      new: true,
    }
  );
  if (result) {
    await Users.findByIdAndUpdate(userId, { $set: { role: "member" } });
  }
  return result;
};

const logingUsersForDb = async (playood: Partial<TUser>) => {
  if (!playood.email || !playood.password) {
    throw new Error("Email and password are required!");
  }
  const user = await Users.findOne({ email: playood.email });
  if (!user) {
    throw new Error("Invalid email or password Please try again!");
  }
  const comperPassword = await bcrypt.compare(playood.password, user.password);

  if (!comperPassword) {
    throw new Error("Invalid email or password Please try again!");
  }
  const token = jwt.sign(
    { email: user.email, role: user.role },
    confing.jwt_scrict as string,
    { expiresIn: "3d" }
  );

  return { token, email: user?.email };
};

const updateUserRoleForDb = async (userId: string, playood: string) => {
  const result = await Users.updateOne(
    { _id: userId },
    {
      $set: { role: playood },
    }
  ).select("-password");
  if (!result) {
    throw new Error("dose not update user role");
  }
  return result;
};

const chengePasswordForDb = async (
  userData: JwtPayload,
  playood: TchengePassword
) => {
  const isUserExist = await Users.findOne({
    email: userData?.email,
    role: userData?.role,
  });
  if (!isUserExist) {
    throw new Error("user not found");
  }

  const comperPassword = await bcrypt.compare(
    playood.oldPassword,
    isUserExist.password
  );

  if (!comperPassword) {
    throw new Error("The old password is incorrect. Please try again");
  }
  const hasNewPassword = await bcrypt.hash(playood.newPassword, 10);
  if (!hasNewPassword) {
    throw new Error(" bcrypt solt generate problem ");
  }
  const result = await Users.findOneAndUpdate(
    {
      email: userData?.email,
      role: userData?.role,
    },
    {
      password: hasNewPassword,
    }
  );
  if (!result) {
    throw new Error(" password chenge problem ");
  }

  return result;
};

const forgotPasswordForDb = async (userEmail: string) => {
  const isUserExist = await Users.findOne({
    email: userEmail,
  });

  if (!isUserExist) {
    throw new Error("user not found");
  }
  const jwtPayload = {
    email: isUserExist?.email as string,
    role: isUserExist?.role as string,
  };

  const accessToken = createToken(
    jwtPayload,
    confing?.jwt_scrict as string,
    "6m"
  );

  const resetUiLink = `http://localhost:5173/reset-password/${isUserExist?._id}/${accessToken}`;
  sendEmail(isUserExist.email, resetUiLink);
};

const resetPasswordForDb = async (
  playood: { id: string; newPassword: string },
  token: string
) => {
  const isUserExist = await Users.findOne({
    _id: playood.id,
  });
  
  if (!isUserExist) {
    throw new Error("user not found");
  }
  const decoded = jwt.verify(token, confing.jwt_scrict as string) as JwtPayload;
  const user = await Users.findOne({ _id: playood?.id });
  console.log("user services ",user)
  if (!user) {
    throw new Error("you are  unauthorization");
  }
  if (user?.email !== decoded.email) {
    throw new Error("you are  unauthorization");
  }

  const hasNewPassword = await bcrypt.hash(playood.newPassword, 10);
  if (!hasNewPassword) {
    throw new Error("bcrypt solt generate problem");
  }

  const resetPassword = await Users.findOneAndUpdate(
    { _id: playood.id },
    {
      password: hasNewPassword,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  return null;
};

const getSingleUserFromDBById=async (userid:string)=>{
  
  const query={_id:new ObjectId(userid)}
  const result=await Users.find(query)
  
  return result
}
const updateSocilLinkUsersForDb = async (email: string, playood: TLinks) => {
  console.log(email);
  const result = await Users.findOneAndUpdate({ email: email }, playood, {
    new: true,
  }).select("-password");
  return result;
};

const totalDataForDb = async () => {
  const result = (await Users.find({})).length;
  const result1 = (await BloodRequest.find({})).length;
  const result2 = (await BookModel.find({})).length;
  const result3 = (await Users.find({})).length;

  return {
    totallUser: result,
    totallBloodRequest: result1,
    totallBookRequest: result2,
    totallTusationRequest: result3,
  };
};
export const usersServices = {
  createUserForDb,
  getAllUsersForDb,
  getSingleUsersForDb,
  updateSingleUsersForDb,
  deleteSingleUsersForDb,
  blockSingleUsersForDb,
  activekSingleUsersForDb,
  addDesignationSingleUsersForDb,
  logingUsersForDb,
  updateUserRoleForDb,
  chengePasswordForDb,
  forgotPasswordForDb,
  resetPasswordForDb,
  getSingleUserFromDBById,
  updateSocilLinkUsersForDb,
  totalDataForDb,
};
