import { asyncCatch } from "../../utility/async.catch";
import { previousServices } from "./previousCommitte.services";

const createPrevious = asyncCatch(async (req, res) => {
  const previousCommitte = req.body;
  const result = await previousServices.createPreviousIntoDB(previousCommitte);
  res.status(200).json({
    success: true,
    message: "Previous Committe Created Successfully",
    data: result,
  });
});

const getAllPrevious = asyncCatch(async (req, res) => {
  const result = await previousServices.getAllPreviousFromDB();
  res.status(200).json({
    success: true,
    message: "Previous Committe Geted Successfully",
    data: result,
  });
});
const deletePrevious = asyncCatch(async (req, res) => {
  const id = req.params.id;
  const result = await previousServices.deletePriviousFromDB(id);
  res.status(200).json({
    success: true,
    message: "Previous Committe Successfully Deleted",
    data: result,
  });
});
export const preivousController = {
  createPrevious,
  deletePrevious,
  getAllPrevious,
};
