export const validateQuestion = (req, res, next) => {
  const { title, description, category } = req.body;
  if (!title) {
    return res.status(400).json({
      message: `Invalid request data title is required`,
    });
  } else if (typeof title !== "string") {
    return res.status(400).json({
      message: `Invalid request data title must be a string`,
    });
  }
  if (!description) {
    return res.status(400).json({
      message: `Invalid request data description is required`,
    });
  } else if (typeof description !== "string") {
    return res.status(400).json({
      message: `Invalid request data description must be a string`,
    });
  }
  if (!category) {
    return res.status(400).json({
      message: `Invalid request data category is required`,
    });
  } else if (typeof category !== "string") {
    return res.status(400).json({
      message: `Invalid request data category must be a string`,
    });
  }
  next();
};
