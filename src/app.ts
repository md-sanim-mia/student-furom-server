import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routers";
const app: Application = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.use("/api/v1", router);
app.get("/", (req: Request, res: Response) => {
  res.send("I am a student furom server ");
});

export default app;
