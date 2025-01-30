import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routers";
import gobalErrorHandilers from "./app/middlwares/gogbalerrorhandiler";
const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://hcsf-frontend.vercel.app"],
  })
);
app.use("/api/v1", router);
app.use(gobalErrorHandilers);
app.get("/", (req: Request, res: Response) => {
  res.send("I am a student forum server ");
});

export default app;
