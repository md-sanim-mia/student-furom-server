type TBloodGroup = "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";

export type TUser = {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  image: string;
  department: string;
  year: string;
  session: string;
  bloodGroup: TBloodGroup;
  address: string;
  status?: "in-progress" | "block";
  role?: "user";
  designation?: string;
  facebook?: string;
  linkedIn?: string;
  gender: "Male" | "Female" | "Other";
};
export type TUpdateUser = {
  name?: string;
  email?: string;
  phoneNumber?: string;
  image?: string;
  department?: string;
  year?: string;
  session?: string;
  bloodGroup?: TBloodGroup;
  address?: string;
  status?: "in-progress" | "block";
  role?: "user";
  designation?: string;
  facebook?: string;
  linkedIn?: string;
  gender?: "Male" | "Female" | "Other";
};

export type TLinks = {
  facebook?: string;
  linkedIn?: string;
};
export type TchengePassword = {
  newPassword: string;
  oldPassword: string;
};
