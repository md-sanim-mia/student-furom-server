import { string, z } from "zod";
import { BloodGroup, Genders, Status } from "./blood.request.constant";

const bloodRequestValidationSchema = z.object({
  body: z.object({
    patientName: z.string().min(1, "Patient name is required"),
    patientEmail: z.string().email("Invalid email address").optional(),
    patientContactNumber: z
      .string()
      .min(1, "Patient contact number is required"),
    patientAge: z.string(),
    patientBloodGroup: z.enum([...BloodGroup] as [string, ...string[]]),
    bagsNeeded: z.date(),
    neededByDeadline: z.string(),
    hospitalAddress: z.string().min(1, "Hospital address is required"),
    hospitalName: z.string().min(1, "Hospital name is required").optional(),
    gender: z.enum([...Genders] as [string, ...string[]]),
    status: z
      .enum([...Status] as [string, ...string[]])
      .optional()
      .default("pending"),
  }),
});

export default bloodRequestValidationSchema;
