/**
 * @swagger
 * /answers:
 *   get:
 *     summary: Get all answers
 *     responses:
 *       '200':
 *         description: Successfully retrieved answers
 */

/**
 * @swagger
 * /answers/{answerId}/vote:
 *   post:
 *     summary: Vote on an answer
 *     parameters:
 *       - in: path
 *         name: answerId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the answer to retrieve
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               vote:
 *                 type: integer
 *                 description: vote for an answer
 *     responses:
 *       '200':
 *         description: Vote on the answer has been recorded successfully.
 *       '404':
 *         description: Answer not found
 */

export default {};
