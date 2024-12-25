import express from "express";
import cors from "cors";
import path from "path";
import swaggerJSDoc from "swagger-jsdoc";
import { fileURLToPath } from "url";
import swaggerUiDist from "swagger-ui-dist";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

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

// Serve Swagger UI on the homepage (/)
app.use(
  "/",
  express.static(swaggerUiDist.getAbsoluteFSPath()),
  (req, res) => {
    res.sendFile(path.join(swaggerUiDist.getAbsoluteFSPath(), "index.html"));
  }
);

app.get("/test", (req, res) => {
  return res.json("Server API is working 🚀");
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
