import express from "express";
import { validationRequest } from "../../middlwares/validationRequest";
import bloodRequestValidationSchema from "./blood.request.validation";
import { bloodRequestControllar } from "./blood.request.controllar";

const router = express.Router();

router.post(
  "/create-blood-request",
  validationRequest(bloodRequestValidationSchema),
  bloodRequestControllar.createBloodRequest
);
router.get("/get-blood-request", bloodRequestControllar.getAllBloodRequest);

router.get("/:bloodRequestId", bloodRequestControllar.getSingleBloodRequest);
router.get(
  "/pending-blood-request",
  bloodRequestControllar.pendingBloodRequest
);
router.delete(
  "/:bloodRequestId",
  bloodRequestControllar.deletedSingleBloodRequest
);
router.patch(
  "/approved-request/:bloodRequestId",
  bloodRequestControllar.approvedSingleBloodRequest
);
router.patch(
  "/rejected-request/:bloodRequestId",
  bloodRequestControllar.rejectedSingleBloodRequest
);

export const bloodRequestRouter = router;
