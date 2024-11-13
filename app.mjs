import express from "express";
import cors from "cors";
import questionRouter from "./routes/questions.mjs";
import answersRouter from "./routes/answers.mjs";
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use("/questions", questionRouter);
app.use("/answers", answersRouter);

app.get("/test", (req, res) => {
  return res.json("Server API is working 🚀");
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});