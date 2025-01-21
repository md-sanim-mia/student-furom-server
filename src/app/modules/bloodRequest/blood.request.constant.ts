import { TBloodGroups, TGender, TStatus } from "./blood.request.interface";

export const BloodGroup: TBloodGroups[] = [
  "A+",
  "A-",
  "B+",
  "B-",
  "AB+",
  "AB-",
  "O+",
  "O-",
];

export const Genders: TGender[] = ["Male", "Female", "Other"];
export const Status: TStatus[] = ["pending", "approved", "rejected"];
export const BloodRequestSearchbleFields = ["patientName", "patientEmail"];
