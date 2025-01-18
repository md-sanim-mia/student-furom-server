import { string, z } from "zod";
import { BloodGroup } from "./users.const";

const usersValidationSchema = z.object({
  body: z.object({
    name: z.string().nonempty("Name is required"),
    email: z.string().email("Invalid email").nonempty("Email is required"),
    password: z
      .string()
      .min(6, "password must be 6 character")
      .nonempty("password is required"),
    phoneNumber: z.string().nonempty("Phone number is required"),
    bloodGroup: z.enum([...BloodGroup] as [string, ...string[]]),
    department: z.string().nonempty("Department is required"),
    image: z.string().nonempty("Image is required"),
    address: z.string().nonempty("Address is required"),
    session: z.string().nonempty("Session is required"),
    role: z.string().default("user").optional(),
    year: z.string().nonempty("Year is required"),
    status: z.enum(["in-progress", "block"]).default("in-progress").optional(),
    facebook: z.string().optional().default(""),
    linkedIn: z.string().optional().default(""),
    gender: z.enum(["Male", "Female", "Other"]),
  }),
});
const usersUpdateValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email("Invalid email").optional(),
    phoneNumber: z.string().optional(),
    bloodGroup: z.enum([...BloodGroup] as [string, ...string[]]).optional(),
    department: z.string().optional(),
    image: z.string().optional(),
    address: z.string().optional(),
    session: z.string().optional(),
    year: z.string().optional(),
    status: z.enum(["in-progress", "block"]).default("in-progress").optional(),
    facebook: z.string().optional().default("").optional(),
    linkedIn: z.string().optional().default("").optional(),
    gender: z.enum(["Male", "Female", "Other"]).optional(),
  }),
});

const LogingValidationSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string({ required_error: "password is required" }),
  }),
});
const updatePasswordValidationSchema = z.object({
  body: z.object({
    newPassword: z.string({ required_error: "new password is required" }),
    oldPassword: z.string({ required_error: "old password is required" }),
  }),
});

const forgetPasswordValidationSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: "User email is required!",
    }),
  }),
});

const resetPasswordValidationSchema = z.object({
  body: z.object({
    id: z.string({
      required_error: "id is required!",
    }),
    newPassword: z
      .string({
        required_error: "new password is required!",
      })
      .min(6, "password must be 6 character"),
  }),
});

const updateSocilLinkValidationSchema = z.object({
  body: z.object({
    facebook: z
      .string({
        required_error: "facebook is required!",
      })
      .optional(),
    linkedIn: z
      .string({
        required_error: "linkind  is required!",
      })
      .optional(),
  }),
});

export const usersValidation = {
  usersValidationSchema,
  usersUpdateValidationSchema,
  LogingValidationSchema,
  updatePasswordValidationSchema,
  forgetPasswordValidationSchema,
  resetPasswordValidationSchema,
  updateSocilLinkValidationSchema,
};
