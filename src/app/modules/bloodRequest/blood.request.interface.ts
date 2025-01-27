import { Date } from "mongoose";

export type TBloodGroups =
  | "A+"
  | "A-"
  | "B+"
  | "B-"
  | "AB+"
  | "AB-"
  | "O+"
  | "O-";

export type TGender = "Male" | "Female" | "Other";
export type TStatus = "pending" | "approved" | "rejected";
export type TBloodRequest = {
  patientName: string;
  patientEmail?: string;
  patientContactNumber: string;
  patientAge: string;
  patientBloodGroup: TBloodGroups;

  bagsNeeded: string;
  neededByDeadline: string;
  hospitalAddress: string;
  hospitalName?: string;
  status?: TStatus;
  gender: TGender;
};
