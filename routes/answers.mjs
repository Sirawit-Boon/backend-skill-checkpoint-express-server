import { Router } from "express";
import connectionPool from "../utils/db.mjs";

const answersRouter = Router();

// Get all answers
answersRouter.get("/", async (req, res) => {
  try {
    const result = await connectionPool.query(`
            select answers.id as answer_id, answers.content, question_id, answer_votes.vote
            from answers
            inner join answer_votes on answer_votes.answer_id = answers.id
            order by answer_id desc;
            `);
    return res.status(200).json({
      data: result.rows,
    });
  } catch (e) {
    res.status(500).json({
      message: `Unable to fetch answer`,
      error: e.message,
    });
  }
});

// Vote on an answer
answersRouter.post("/:answerId/vote", async (req, res) => {
  const answerId = req.params.answerId;
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
      [vote, answerId]
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

export default answersRouter;
