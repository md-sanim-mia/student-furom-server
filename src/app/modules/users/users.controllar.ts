import { JwtPayload } from "jsonwebtoken";
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
    message: "success fully login",
    data: result,
  });
});

const getSingleUser = asyncCatch(async (req, res) => {
  const email = req?.query?.email as string;
  const result = await usersServices.getSingleUsersForDb(email);
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
const updateSocilLink = asyncCatch(async (req, res) => {
  const playood = req.body;
  const userEmail = req?.query?.email as string;
  const result = await usersServices.updateSocilLinkUsersForDb(
    userEmail,
    playood
  );
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

const chengePassword = asyncCatch(async (req, res) => {
  const result = await usersServices.chengePasswordForDb(
    req?.user as JwtPayload,
    req.body
  );
  console.log;

  res.status(200).json({
    success: true,
    message: "success fully chenge password",
    data: result,
  });
});

const forgotPassword = asyncCatch(async (req, res) => {
  const email = req?.body?.email;
  const result = await usersServices.forgotPasswordForDb(email);
  res.status(200).json({
    success: true,
    message: "reset link success fully generated",
    data: result,
  });
});
const totalData = asyncCatch(async (req, res) => {
  const result = await usersServices.totalDataForDb();
  res.status(200).json({
    success: true,
    message: "totall data for db",
    data: result,
  });
});
const resetPasswor = asyncCatch(async (req, res) => {
  const token = req?.headers?.authorization?.split(" ")[1];
  const playood = req?.body;
  const result = await usersServices.resetPasswordForDb(
    playood,
    token as string
  );
  res.status(200).json({
    success: true,
    message: "success fully updated your password please login !",
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
  chengePassword,
  forgotPassword,
  resetPasswor,
  updateSocilLink,
  totalData,
};
