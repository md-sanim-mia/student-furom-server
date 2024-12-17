import { asyncCatch } from "../../utility/async.catch";
import { bloodRequestService } from "./blood.request.service";

const createBloodRequest = asyncCatch(async (req, res) => {
  const playood = req.body;
  const result = await bloodRequestService.createBloodRequestForDb(playood);
  res.status(200).json({
    success: true,
    message: "blood request success fully created",
    data: result,
  });
});

const getAllBloodRequest = asyncCatch(async (req, res) => {
  const result = await bloodRequestService.getAllBloodRequestForDb(req.query);
  res.status(200).json({
    success: true,
    message: "get all blood request for db",
    data: result,
  });
});

const getSingleBloodRequest = asyncCatch(async (req, res) => {
  const { bloodRequestId } = req.params;
  const result = await bloodRequestService.getSingleBloodRequestForDb(
    bloodRequestId
  );
  res.status(200).json({
    success: true,
    message: "get single blood request for db",
    data: result,
  });
});

const pendingBloodRequest = asyncCatch(async (req, res) => {
  const result = await bloodRequestService.pendingBloodRequestForDb();
  res.status(200).json({
    success: true,
    message: "get pending blood request for db",
    data: result,
  });
});

const deletedSingleBloodRequest = asyncCatch(async (req, res) => {
  const { bloodRequestId } = req.params;
  const result = await bloodRequestService.deleteSingleBloodRequestForDb(
    bloodRequestId
  );
  res.status(200).json({
    success: true,
    message: "deleted blood request for db ",
    data: result,
  });
});
const approvedSingleBloodRequest = asyncCatch(async (req, res) => {
  const { bloodRequestId } = req.params;
  const result = await bloodRequestService.ApproveStatusSingleBloodRequestForDb(
    bloodRequestId
  );
  res.status(200).json({
    success: true,
    message: "blood request satus approved for db ",
    data: result,
  });
});
const rejectedSingleBloodRequest = asyncCatch(async (req, res) => {
  const { bloodRequestId } = req.params;
  const result = await bloodRequestService.rejectStatusSingleBloodRequestForDb(
    bloodRequestId
  );
  res.status(200).json({
    success: true,
    message: " blood request satus rejected for db ",
    data: result,
  });
});

export const bloodRequestControllar = {
  createBloodRequest,
  getAllBloodRequest,
  getSingleBloodRequest,
  deletedSingleBloodRequest,
  pendingBloodRequest,
  approvedSingleBloodRequest,
  rejectedSingleBloodRequest,
};
