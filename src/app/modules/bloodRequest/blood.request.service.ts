import { TBloodRequest } from "./blood.request.interface";
import { BloodRequest } from "./blood.request.model";

const createBloodRequestForDb = async (playood: TBloodRequest) => {
  const result = await BloodRequest.create(playood);
  return result;
};

const getAllBloodRequestForDb = async () => {
  const result = await BloodRequest.find({});
  return result;
};

const getSingleBloodRequestForDb = async (userId: string) => {
  const result = await BloodRequest.findOne({ _id: userId });
  return result;
};
const pendingBloodRequestForDb = async () => {
  const result = await BloodRequest.findOne({ status: "pending" });
  return result;
};

const deleteSingleBloodRequestForDb = async (userId: string) => {
  const result = await BloodRequest.deleteOne({ _id: userId });
  return result;
};

export const bloodRequestService = {
  createBloodRequestForDb,
  getAllBloodRequestForDb,
  getSingleBloodRequestForDb,
  deleteSingleBloodRequestForDb,
  pendingBloodRequestForDb,
};
