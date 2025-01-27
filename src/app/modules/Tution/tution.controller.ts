import { asyncCatch } from "../../utility/async.catch";
import { tuionServices } from "./tution.services";

const getAllTuion = asyncCatch(async (req, res) => {
  const result = await tuionServices.getAllTutionFormDB();
  res.status(200).json({
    success: true,
    message: "All tution geted succesfully",
    data: result,
  });
});
const createTuion = asyncCatch(async (req, res) => {
  const tutionData = req.body;
  const result = await tuionServices.createTutionIntoDB(tutionData);
  res.status(200).json({
    success: true,
    message: "Tution request created succesfully",
    data: result,
  });
});

const deleteTuion = asyncCatch(async (req, res) => {
  const id = req.params.id;
  const result = await tuionServices.deleteTutionIntoDB(id);
  res.status(200).json({
    success: true,
    message: "Tution Request deleted successfully",
    data: result,
  });
});
const getSingleTution = asyncCatch(async (req, res) => {
  const id = req.params.id;
  const result = await tuionServices.getSingleTutionReqFromDB(id);
  res.status(200).json({
    success: true,
    message: "Get single tution successfully",
    data: result,
  });
});
export const tutionController = {
  deleteTuion,
  getAllTuion,
  createTuion,
  getSingleTution,
};
