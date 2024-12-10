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
router.patch(
  "/:userId",
  validationRequest(usersValidation.usersUpdateValidationSchema),
  usersContllors.updateSingleUser
);
router.delete("/:userId", usersContllors.deleteSingleUser);
router.patch("/black-user/:userId", usersContllors.blockSingleUser);
router.patch("/active-user/:userId", usersContllors.activeSingleUser);
router.patch(
  "/add-designation/:userId",
  validationRequest(usersValidation.LogingValidationSchema),
  usersContllors.addDesignationSingleUsers
);
router.post("/loging-user", usersContllors.logingUsers);

export const usersRouters = router;
