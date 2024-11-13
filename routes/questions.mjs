import { Router } from "express";
import connectionPool from "../utils/db.mjs";
import { validateQuestion } from "../middlewares/question.validation.mjs";
const questionRouter = Router();

// Get all questions
questionRouter.get("/", async (req, res) => {
  try {
    const result = await connectionPool.query(`select * from questions`);
    return res.status(200).json({
      data: result.rows,
    });
  } catch (e) {
    return res.status(500).json({
      message: `Unable to fetch questions.`,
      error: e.message,
    });
  }
});

// Search questions by title or category
questionRouter.get("/search", async (req, res) => {
  try {
    const category = req.query.category || "";
    const title = req.query.title || "";
    let query = `select * from questions`;
    let values = [];
    if (category && title) {
      query += ` where questions.category ilike $1 and questions.title ilike $2`;
      values = [`%${category}%`, `%${title}%`];
    } else if (category) {
      query += ` where questions.category ilike $1`;
      values = [`%${category}%`];
    } else if (title) {
      query += ` where questions.title ilike $1`;
      values = [`%${title}%`];
    }
    if (!category && !title) {
      return res.status(400).json({
        message: "Invalid search parameters.",
      });
    }
    const result = await connectionPool.query(query, values);
    return res.status(200).json({
      data: result.rows,
    });
  } catch (e) {
    return res.status(500).json({
      message: `Unable to fetch questions.`,
      error: e.message,
    });
  }
});

// Get a question by ID
questionRouter.get("/:questionId", async (req, res) => {
  const questionId = req.params.questionId;
  try {
    const result = await connectionPool.query(
      `select * from questions where id=$1`,
      [questionId]
    );
    if (!result.rows[0]) {
      return res.status(404).json({
        message: `Question ID: ${questionId} not found`,
      });
    }
    return res.status(200).json({
      data: result.rows[0],
    });
  } catch (e) {
    return res.status(500).json({
      message: `Unable to fetch questions.`,
      error: e.message,
    });
  }
});

// Create a new question
questionRouter.post("/", [validateQuestion], async (req, res) => {
  const newQuestion = req.body;
  try {
    await connectionPool.query(
      `insert into questions (title, description, category) values ($1, $2, $3)`,
      [newQuestion.title, newQuestion.description, newQuestion.category]
    );
    return res.status(201).json({
      message: `Question created sucessfully`,
    });
  } catch (e) {
    return res.status(500).json({
      message: `Unable to create question`,
      error: e.message,
    });
  }
});

// Update a question by ID
questionRouter.put("/:questionId", [validateQuestion], async (req, res) => {
  const questionId = req.params.questionId;
  const updatedQuestion = { ...req.body };
  try {
    const result = await connectionPool.query(
      `update questions set title = $2, description = $3, category = $4 where id = $1 returning *`,
      [
        questionId,
        updatedQuestion.title,
        updatedQuestion.description,
        updatedQuestion.category,
      ]
    );
    if (!result.rows[0]) {
      return res.status(404).json({
        message: `Question ID: ${questionId} not found`,
      });
    }
    return res.status(200).json({
      message: `Question updated sucessfully`,
      data: result.rows[0],
    });
  } catch (e) {
    return res.status(500).json({
      message: `Unable to update question.`,
      error: e.message,
    });
  }
});

// Delete a question by ID
questionRouter.delete("/:questionId", async (req, res) => {
  const questionId = req.params.questionId;
  try {
    const result = await connectionPool.query(
      `delete from questions where id = $1`,
      [questionId]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({
        message: `Question ID: ${questionId} not found`,
      });
    }
    return res.status(200).json({
      message: `Deleted question sucessfully`,
    });
  } catch (e) {
    return res.status(500).json({
      message: `Unable to delete question.`,
      error: e.message,
    });
  }
});

// Get answers for a question
questionRouter.get("/:questionId/answers", async (req, res) => {
  const questionId = req.params.questionId;
  try {
    const result = await connectionPool.query(
      `
        select answers.id, answers.content
        from answers
        inner join questions on answers.question_id = questions.id
        where questions.id = $1
        `,
      [questionId]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({
        message: `Question ID: ${questionId} no answer found`,
      });
    }
    return res.status(200).json({
      data: result.rows,
    });
  } catch (e) {
    return res.status(500).json({
      message: `Unable to fetch answers.`,
      error: e.message,
    });
  }
});

// Create an answer for a question
questionRouter.post("/:questionId/answers", async (req, res) => {
  const questionId = req.params.questionId;
  const newAnswer = req.body;
  try {
    await connectionPool.query(
      `insert into answers (content, question_id) values ($1, $2)`,
      [newAnswer.content, questionId]
    );
    if (newAnswer.content.length > 300) {
      return res.status(400).json({
        message: `Content must be less than 300 letters`,
      });
    }
    return res.status(201).json({
      message: `Answer created successfully`,
    });
  } catch (e) {
    return res.status(500).json({
      message: `Unable to create answers.`,
      error: e.message,
    });
  }
});

// Delete answers for a question
questionRouter.delete("/:questionId/answers", async (req, res) => {
  const questionId = req.params.questionId;
  try {
    const result = await connectionPool.query(
      `delete from answers where question_id = $1`,
      [questionId]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({
        message: `Question ID: ${questionId} no answer found`,
      });
    }
    return res.status(200).json({
      message: `All answers for the question have been deleted successfully.`,
    });
  } catch (e) {
    return res.status(500).json({
      message: `Unable to delete question.`,
      message: e.message,
    });
  }
});

// Vote on a question
questionRouter.post("/:questionId/vote", async (req, res) => {
  const questionId = req.params.questionId;
  const newVote = req.body;
  try {
    const vote = newVote.vote;
    if (vote !== 1 && vote !== -1) {
      return res.status(400).json({
        message: "Invalid vote value. Vote should be either 1 or -1.",
      });
    }
    await connectionPool.query(
      `insert into question_votes (vote, question_id) values ($1, $2)`,
      [vote, questionId]
    );
    return res.status(200).json({
      message: `Vote on the question has been recorded successfully.`,
    });
  } catch (e) {
    return res.status(500).json({
      message: `Unable to vote question`,
      error: e.message,
    });
  }
});

export default questionRouter;
