import expess from "express";
import { usersContllors } from "./users.controllar";
import { validationRequest } from "../../middlwares/validationRequest";
import { usersValidation } from "./users.validation";
import auth from "../../middlwares/auth";

const router = expess.Router();

router.post(
  "/create-user",
  validationRequest(usersValidation.usersValidationSchema),
  usersContllors.createUsers
);
router.get("/get-users", usersContllors.getAllUsers);
router.get("/", usersContllors.getSingleUser);
router.get('/:userid',usersContllors.getSingleUserById)
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
  usersContllors.addDesignationSingleUsers
);
router.post(
  "/loging-user",
  validationRequest(usersValidation.LogingValidationSchema),
  usersContllors.logingUsers
);
router.patch("/set-role/:userId", usersContllors.updateRoleSingleUser);

router.post(
  "/chenge-password",
  validationRequest(usersValidation.updatePasswordValidationSchema),
  auth("user", "admin", "member"),
  usersContllors.chengePassword
);

router.post(
  "/forget-password",
  validationRequest(usersValidation.forgetPasswordValidationSchema),
  usersContllors.forgotPassword
);
router.post(
  "/reset-password",
  validationRequest(usersValidation.resetPasswordValidationSchema),
  usersContllors.resetPasswor
);
router.post(
  "/update-link",
  validationRequest(usersValidation.updateSocilLinkValidationSchema),
  usersContllors.updateSocilLink
);
router.get("/totall-data", usersContllors.totalData);

export const usersRouters = router;
