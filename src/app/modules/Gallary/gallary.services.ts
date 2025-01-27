import { TGallary } from "./gallary.interface";
import { GallaryModel } from "./gallary.model";
import { ObjectId } from "mongodb";

const createGallaryIntoDB = async (playload: TGallary) => {
  const result = await GallaryModel.create(playload);
  return result;
};

const getAllGallaryFromDB = async () => {
  const result = await GallaryModel.find();
  return result;
};

const deleteGallaryFromDB = async (id: string) => {
  const query = { _id: new ObjectId(id) };
  const result = await GallaryModel.deleteOne(query);
  return result;
};

export const GallaryServices = {
  createGallaryIntoDB,
  getAllGallaryFromDB,
  deleteGallaryFromDB,
};
