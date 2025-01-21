import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });
export default {
  port: process.env.PORT,
  databaes_url: process.env.MONGODB_URL,
  jwt_scrict: process.env.JWT_SCRICT,
};
