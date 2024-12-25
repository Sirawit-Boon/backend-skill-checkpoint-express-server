import express from "express";
import cors from "cors";
import questionRouter from "./routes/questions.mjs";
import answersRouter from "./routes/answers.mjs";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
const app = express();
const port = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());
app.use("/questions", questionRouter);
app.use("/answers", answersRouter);

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Question API",
      version: "1.0.0",
      description: "Question API information",
      contact: {
        name: "Sirawit",
      },
    },
    servers: [
      {
        url: "https://backend-questions-answers-express-server.vercel.app/",
      },
    ],
  },
  apis: [
    "app.mjs",
    "./routes/questions.mjs",
    "./routes/answers.mjs",
    "./swagger/questionsSwagger.mjs",
    "./swagger/answersSwagger.mjs",
  ],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/test", (req, res) => {
  return res.json("Server API is working 🚀");
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
