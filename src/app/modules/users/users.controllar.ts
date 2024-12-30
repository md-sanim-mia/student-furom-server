import { asyncCatch } from "../../utility/async.catch";
import { usersServices } from "./users.service";

const createUsers = asyncCatch(async (req, res) => {
  const playood = req.body;
  const result = await usersServices.createUserForDb(playood);
  res.status(200).json({
    success: true,
    message: "user success fully created",
    data: result,
  });
});

const getAllUsers = asyncCatch(async (req, res) => {
  const result = await usersServices.getAllUsersForDb(req?.query);
  res.status(200).json({
    success: true,
    message: "get all users for db",
    data: result,
  });
});

const logingUsers = asyncCatch(async (req, res) => {
  const playood = req.body;
  const result = await usersServices.logingUsersForDb(playood);
  res.status(200).json({
    success: true,
    message: "get all users for db",
    data: result,
  });
});

const getSingleUser = asyncCatch(async (req, res) => {
  const { userId } = req.params;
  const result = await usersServices.getSingleUsersForDb(userId);
  res.status(200).json({
    success: true,
    message: "get single user for db",
    data: result,
  });
});

const updateSingleUser = asyncCatch(async (req, res) => {
  const { userId } = req.params;
  const playood = req.body;
  const result = await usersServices.updateSingleUsersForDb(userId, playood);
  res.status(200).json({
    success: true,
    message: "update single user for db",
    data: result,
  });
});

const deleteSingleUser = asyncCatch(async (req, res) => {
  const { userId } = req.params;
  const result = await usersServices.deleteSingleUsersForDb(userId);
  res.status(200).json({
    success: true,
    message: "delete single user for db",
    data: result,
  });
});

const blockSingleUser = asyncCatch(async (req, res) => {
  const { userId } = req.params;
  const result = await usersServices.blockSingleUsersForDb(userId);
  res.status(200).json({
    success: true,
    message: "block single user for db",
    data: result,
  });
});

const activeSingleUser = asyncCatch(async (req, res) => {
  const { userId } = req.params;
  const result = await usersServices.activekSingleUsersForDb(userId);
  res.status(200).json({
    success: true,
    message: "active single user for db",
    data: result,
  });
});

const addDesignationSingleUsers = asyncCatch(async (req, res) => {
  const { userId } = req.params;
  const playood = req.body;
  const result = await usersServices.addDesignationSingleUsersForDb(
    userId,
    playood?.designation
  );
  res.status(200).json({
    success: true,
    message: "success fully add designation",
    data: result,
  });
});
const updateRoleSingleUser = asyncCatch(async (req, res) => {
  const { userId } = req.params;
  const playood = req?.body?.roles;
  const result = await usersServices.updateUserRoleForDb(userId, playood);
  res.status(200).json({
    success: true,
    message: "success fully set the role",
    data: result,
  });
});

export const usersContllors = {
  createUsers,
  getAllUsers,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
  blockSingleUser,
  activeSingleUser,
  addDesignationSingleUsers,
  logingUsers,
  updateRoleSingleUser,
};
