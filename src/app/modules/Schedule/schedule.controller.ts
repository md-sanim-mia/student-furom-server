import { asyncCatch } from "../../utility/async.catch";
import { scheduleServices } from "./schedule.services";

const getAllSchedule = asyncCatch(async (req, res) => {
  const result = await scheduleServices.getAllSceduleFormDB();
  res.status(200).json({
    success: true,
    message: "All schedule geted succesfully",
    data: result,
  });
});
const createShedule = asyncCatch(async (req, res) => {
  const scheduledata = req.body;
  const result = await scheduleServices.createScheduleIntoDB(scheduledata);
  res.status(200).json({
    success: true,
    message: "schedule created succesfully",
    data: result,
  });
});

const deleteSchedule = asyncCatch(async (req, res) => {
  const id = req.params.id;
  const result = await scheduleServices.deleteScheduleIntoDB(id);
  res.status(200).json({
    success: true,
    message: "schedule deleted successfully",
    data: result,
  });
});

const updateSchedule = asyncCatch(async (req, res) => {
  const id = req.params.id;
  const updateDoc = req.body;
  const result = await scheduleServices.updateScheduleFromDB(id, updateDoc);
  res.status(200).json({
    success: true,
    message: "Book updated successfully",
    data: result,
  });
});
export const scheduleController = {
  createShedule,
  deleteSchedule,
  updateSchedule,
  getAllSchedule,
};
