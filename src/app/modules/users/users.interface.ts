type TBloodGroup = "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";

type TUser = {
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
};
type TUpdateUser = {
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
};
