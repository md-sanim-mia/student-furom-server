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
  donorName: string;
  donorEmail: string;
  donorBloodGroup: string;
  donorContactNumber: string;
  donorGender: string;
  donorAge: number;

  patientName: string;
  patientEmail?: string;
  patientContactNumber: string;
  patientAge: number;
  patientBloodGroup: TBloodGroups;

  bagsNeeded: number;
  neededByDeadline: Date;

  hospitalAddress: string;
  hospitalName: string;
  status?: TStatus;
  requesterGender: TGender;
};
