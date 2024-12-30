import queryBuilders from "../../builder/queryBuilder";
import { userSearchbleFields } from "./users.const";
import { Users } from "./users.model";
import bcrypt from "bcrypt";
const createUserForDb = async (playood: TUser) => {
  const isExist = await Users.findOne({ email: playood.email });
  if (isExist) {
    throw new Error("user alredy exist ");
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
  const result = await Users.findOne({ _id: userId }).select("-password");
  return result;
};

const updateSingleUsersForDb = async (userId: string, playood: TUpdateUser) => {
  const result = await Users.findOneAndUpdate({ _id: userId }, playood, {
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
  const comperPassword = bcrypt.compare(playood.password, user.password);

  if (!comperPassword) {
    throw new Error("Invalid email or password Please try again!");
  }
  const result = await Users.findOne({ email: playood.email }).select(
    "-password"
  );
  return result;
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
};
