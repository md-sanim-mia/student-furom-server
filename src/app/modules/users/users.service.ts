import { Users } from "./users.model";

const createUserForDb = async (playood: TUser) => {
  const result = await Users.create(playood);
  return result;
};

const getAllUsersForDb = async () => {
  const result = await Users.find({});
  return result;
};

const getSingleUsersForDb = async (userId: string) => {
  const result = await Users.findOne({ _id: userId });
  return result;
};

const updateSingleUsersForDb = async (userId: string, playood: TUpdateUser) => {
  const result = await Users.findOneAndUpdate({ _id: userId }, playood, {
    new: true,
  });
  return result;
};

const deleteSingleUsersForDb = async (userId: string) => {
  const result = await Users.deleteOne({ _id: userId });
  return result;
};

const blockSingleUsersForDb = async (userId: string) => {
  const result = await Users.deleteOne(
    { _id: userId },
    {
      $set: { status: "block" },
    }
  );
  return result;
};

const activekSingleUsersForDb = async (userId: string) => {
  const result = await Users.deleteOne(
    { _id: userId },
    {
      $set: { status: "in-progress" },
    }
  );
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
};
