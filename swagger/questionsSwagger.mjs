// Grouped documentation by question path
/**
 * @swagger
 * /questions:
 *   get:
 *     summary: Get all questions
 *     tags: [Questions]
 *     responses:
 *       '200':
 *         description: Successfully retrieved questions
 *   post:
 *     summary: Create a new question
 *     tags: [Questions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Title of the question
 *               description:
 *                 type: string
 *                 description: Detailed description of the question
 *               category:
 *                 type: string
 *                 description: Category of the question
 *     responses:
 *       '201':
 *         description: Question created successfully
 */

/**
 * @swagger
 * /questions/search:
 *   get:
 *     summary: "Search questions by category and/or title"
 *     tags: [Questions ]
 *     description: "Returns questions filtered by category and/or title."
 *     parameters:
 *       - name: "category"
 *         in: "query"
 *         description: "The category of the question (optional)"
 *         required: false
 *         schema:
 *           type: "string"
 *       - name: "title"
 *         in: "query"
 *         description: "The title of the question (optional)"
 *         required: false
 *         schema:
 *           type: "string"
 *     responses:
 *       200:
 *         description: "A list of questions matching the search parameters."
 *         content:
 *           application/json:
 *             schema:
 *               type: "object"
 *               properties:
 *                 data:
 *                   type: "array"
 *                   items:
 *                     type: "object"
 *                     properties:
 *                       id:
 *                         type: "integer"
 *                         description: "The ID of the question"
 *                       title:
 *                         type: "string"
 *                         description: "The title of the question"
 *                       description:
 *                         type: "string"
 *                         description: "The description of the question"
 *                       category:
 *                         type: "string"
 *                         description: "The category of the question"
 *       400:
 *         description: "Invalid search parameters"
 *         content:
 *           application/json:
 *             schema:
 *               type: "object"
 *               properties:
 *                 message:
 *                   type: "string"
 *                   example: "Invalid search parameters."
 *       500:
 *         description: "Unable to fetch questions"
 *         content:
 *           application/json:
 *             schema:
 *               type: "object"
 *               properties:
 *                 message:
 *                   type: "string"
 *                   example: "Unable to fetch questions."
 *                 error:
 *                   type: "string"
 *                   example: "Internal server error"
 */

// Grouped documentation by question/:questionId path
/**
 * @swagger
 * /questions/{questionId}:
 *   get:
 *     summary: Get a question by ID
 *     tags: [Questions]
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the question to retrieve
 *     responses:
 *       '200':
 *         description: Successfully retrieved question
 *       '404':
 *         description: Question not found
 *   put:
 *     summary: Update a question by ID
 *     tags: [Questions]
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the question to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Title of the question
 *               description:
 *                 type: string
 *                 description: Detailed description of the question
 *               category:
 *                 type: string
 *                 description: Category of the question
 *     responses:
 *       '200':
 *         description: Question updated successfully
 *       '404':
 *         description: Question not found
 *   delete:
 *     summary: Delete a question by ID
 *     tags: [Questions]
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the question to delete
 *     responses:
 *       '200':
 *         description: Deleted question sucessfully
 *       '404':
 *         description: Question not found
 *
 */

// Grouped documentation by question/answers path
/**
 * @swagger
 * /questions/{questionId}/answers:
 *   get:
 *     summary: Get an answer for a question
 *     tags: [Questions]
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the question to retrieve
 *     responses:
 *       '200':
 *         description: Successfully retrieved answer for a question
 *       '404':
 *         description: Question not found
 *   post:
 *     summary: Create an answer for a question
 *     tags: [Questions]
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the question to retrieve
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 description: Content of the answer
 *     responses:
 *       '201':
 *         description: Answer created successfully
 *   delete:
 *     summary: Delete an answer for a question
 *     tags: [Questions]
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the question to delete
 *     responses:
 *       '200':
 *         description: Deleted answer sucessfully
 *       '404':
 *         description: Question not found
 */

// Grouped documentation by question/:questionId/vote path
/**
 * @swagger
 * /questions/{questionId}/vote:
 *   post:
 *     summary: Vote on a question
 *     tags: [Questions]
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the question to retrieve
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               vote:
 *                 type: integer
 *                 description: vote for a question
 *     responses:
 *       '200':
 *         description: Vote on the question has been recorded successfully.
 *       '404':
 *         description: Question not found
 */

export default {};
