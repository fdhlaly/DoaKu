import express from "express";
import cors from "cors";
import DoaRouter from "./routes/DoaRouter.js";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

app.use("/", DoaRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
