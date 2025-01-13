import queryBuilders from "../../builder/queryBuilder";
import { BloodRequestSearchbleFields } from "./blood.request.constant";
import { TBloodRequest } from "./blood.request.interface";
import { BloodRequest } from "./blood.request.model";

const createBloodRequestForDb = async (playood: TBloodRequest) => {
  const result = await BloodRequest.create(playood);
  return result;
};

const getAllBloodRequestForDb = async (query: Record<string, unknown>) => {
  const userQuery = new queryBuilders(BloodRequest.find(), query)
    .search(BloodRequestSearchbleFields)
    .filter()
    .sort()
    .paginate();

  const result = await userQuery?.modelQuery;

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
const ApproveStatusSingleBloodRequestForDb = async (id: string) => {
  const result = await BloodRequest.findByIdAndUpdate(
    id,
    {
      $set: { status: "approved" },
    },
    {
      new: true,
    }
  );
  return result;
};
const rejectStatusSingleBloodRequestForDb = async (id: string) => {
  const result = await BloodRequest.findByIdAndUpdate(
    id,
    {
      $set: { status: "rejected" },
    },
    {
      new: true,
    }
  );
  return result;
};

export const bloodRequestService = {
  createBloodRequestForDb,
  getAllBloodRequestForDb,
  getSingleBloodRequestForDb,
  deleteSingleBloodRequestForDb,
  pendingBloodRequestForDb,
  ApproveStatusSingleBloodRequestForDb,
  rejectStatusSingleBloodRequestForDb,
};
