import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routers";
import gobalErrorHandilers from "./app/middlwares/gogbalerrorhandiler";
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", router);
app.use(gobalErrorHandilers)
app.get("/", (req: Request, res: Response) => {
  res.send("I am a student forum server ");
});

export default app;
