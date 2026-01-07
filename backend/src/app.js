import express from "express";
import cors from "cors";
import "./config/db.js";
import taskRouter from "./routes/taskRoutes.js";

const app = express();


app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRouter);

app.get("/", (req, res) => {
  res.send("Server is running");
});

export default app;
