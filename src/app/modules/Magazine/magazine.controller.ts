import { asyncCatch } from "../../utility/async.catch";
import { MagazineServices } from "./magazine.services";

const createMagazine = asyncCatch(async (req, res) => {
  const magazineData = req.body;
  const result = await MagazineServices.createMagazineIntoDB(magazineData);
  res.status(200).json({
    success: true,
    message: "Magazine created succesfully",
    data: result,
  });
});

const getAllMagazine = asyncCatch(async (req, res) => {
  const result = await MagazineServices.getAllMagazineFromDB();
  res.status(200).json({
    success: true,
    message: "All magazine geted succesfully",
    data: result,
  });
});

const deleteMagazine = asyncCatch(async (req, res) => {
  const id = req.params.id;
  const result = await MagazineServices.deleteMagazineFromDB(id);
  res.status(200).json({
    success: true,
    message: "Magazine deleted successfully",
    data: result,
  });
});

export const MagazineControllers = {
  createMagazine,
  getAllMagazine,
  deleteMagazine,
};
