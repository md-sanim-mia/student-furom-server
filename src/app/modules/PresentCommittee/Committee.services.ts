import { TCommittee } from "./Committee.interface";
import { CommitteeModel } from "./Committee.model";
import { ObjectId } from "mongodb";
const createCommitteeIntoDB = async (playload: TCommittee) => {
  console.log("services ", playload);
  const result = await CommitteeModel.create(playload);
  console.log("resutl ", result);
  return result;
};

const getAllCommitteeFromDB = async () => {
  const result = await CommitteeModel.find();
  return result;
};

const deletePCommitteesFromDB = async (id: string) => {
  const query = { _id: new ObjectId(id) };
  const result = await CommitteeModel.deleteOne(query);
  return result;
};
const updateCommitteeFromDB = async (
  id: string,
  updateDoc: Partial<TCommittee>
) => {
  const query = { _id: new ObjectId(id) };
  const update = { $set: updateDoc };
  const option = { new: true };
  const result = await CommitteeModel.updateOne(query, update, option);
  return result;
};

export const CommitteeServices = {
  createCommitteeIntoDB,
  deletePCommitteesFromDB,
  updateCommitteeFromDB,
  getAllCommitteeFromDB,
};
