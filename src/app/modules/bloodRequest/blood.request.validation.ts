import { string, z } from "zod";
import { BloodGroup, Genders, Status } from "./blood.request.constant";

const bloodRequestValidationSchema = z.object({
  body: z.object({
    donorName: z.string().min(1, "Donor name is required"),
    donorEmail: z
      .string()
      .email("Invalid email address")
      .min(1, "Donor email is required"),
    donorBloodGroup: z.string().min(1, "Donor blood group is required"),
    donorContactNumber: z.string().min(1, "Donor contact number is required"),
    donorGender: z.enum(["Male", "Female", "Other"]),
    donorAge: z.number().int().min(0, "Donor age must be a positive number"),

    patientName: z.string().min(1, "Patient name is required"),
    patientEmail: z.string().email("Invalid email address").optional(),
    patientContactNumber: z
      .string()
      .min(1, "Patient contact number is required"),
    patientAge: z
      .number()
      .int()
      .min(0, "Patient age must be a positive number"),
    patientBloodGroup: z.enum([...BloodGroup] as [string, ...string[]]),

    bagsNeeded: z.number().int().min(1, "At least one bag is required"),
    neededByDeadline: z.date().refine((date) => !isNaN(date.getTime()), {
      message: "Invalid deadline date",
    }),
    hospitalAddress: z.string().min(1, "Hospital address is required"),
    hospitalName: z.string().min(1, "Hospital name is required"),
    requesterGender: z.enum([...Genders] as [string, ...string[]]),

    status: z
      .enum([...Status] as [string, ...string[]])
      .optional()
      .default("pending"),
  }),
});

export default bloodRequestValidationSchema;
