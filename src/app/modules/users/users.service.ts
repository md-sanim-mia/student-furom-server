import { Users } from "./users.model";
import bcrypt from "bcrypt";
const createUserForDb = async (playood: TUser) => {
  const result = await Users.create(playood);
  return result;
};

const getAllUsersForDb = async () => {
  const result = await Users.find({}).select("-password");
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
  const result = await Users.deleteOne({ _id: userId });
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
    }
  );
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
