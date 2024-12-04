import expess from "express";
import { usersContllors } from "./users.controllar";
import { validationRequest } from "../../middlwares/validationRequest";
import { usersValidation } from "./users.validation";

const router = expess.Router();

router.post(
  "/create-user",
  validationRequest(usersValidation.usersValidationSchema),
  usersContllors.createUsers
);
router.get("/get-users", usersContllors.getAllUsers);
router.get("/:userId", usersContllors.getSingleUser);
router.patch("/:userId", usersContllors.updateSingleUser);
router.delete("/:userId", usersContllors.deleteSingleUser);
router.patch("/:userId", usersContllors.blockSingleUser);
router.patch("/:userId", usersContllors.activeSingleUser);

export const usersRouters = router;
