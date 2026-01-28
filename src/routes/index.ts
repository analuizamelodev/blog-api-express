import { Router } from "express";
import { registerUserController } from "../controllers/authentication/register-user-controller";
import { loginUserController } from "../controllers/authentication/login-user-controller";
import { createPublicationController } from "../controllers/publication/create-publication-controller";
import { deletePublicationByIdController } from "../controllers/publication/delete-publication-by-id-controller";
import { searchAllPublicationsController } from "../controllers/publication/search-all-publications-controller";
import { searchPublicationByIdController } from "../controllers/publication/search-publication-by-id-controller";
import { updatePublicationByIdController } from "../controllers/publication/update-publication-by-id-controller";
import { createCommentController } from "../controllers/comment/create-comment-controller";
import { searchAllCommentsController } from "../controllers/comment/search-all-comments-controller";
import { searchCommentByIdController } from "../controllers/publication/search-comment-by-id-controller";
import { deleteCommentByIdController } from "../controllers/comment/delete-comment-by-id-controller";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Authentication endpoints
 */

/**
 * @swagger
 * /authentication/registration:
 *   post:
 *     summary: register user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Jondoe Silva
 *               email:
 *                 type: string
 *                 example: usuario@email.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       201:
 *         description: User successfully registered
 */
router.post("/authentication/registration", registerUserController);

/**
 * @swagger
 * /authentication/login:
 *   post:
 *     summary: User Login
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: usuario@email.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       200:
 *         description: User successfully logged
 */
router.post("/authentication/login", loginUserController);

/**
 * @swagger
 * tags:
 *   name: Publication
 *   description: Publication endpoints
 */
/**
 * @swagger
 * /publication:
 *   post:
 *     summary: Post a new publication
 *     tags: [Publication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: My first publication
 *               content:
 *                 type: string
 *                 example: This is the content of my first publication.
 *     responses:
 *       201:
 *         description: Publication created successfully
 */
router.post("/publication", createPublicationController);

/**
 * @swagger
 * /publication/{id}:
 *   delete:
 *     summary: Remove a publication by ID
 *     tags: [Publication]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Publication deleted successfully
 *       404:
 *         description: Publication not found
 */
router.delete("/publication/:id", deletePublicationByIdController);

/**
 * @swagger
 * /publication:
 *   get:
 *     summary: Returns all publications
 *     tags: [Publication]
 *     responses:
 *       200:
 *         description: All publications retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   title:
 *                     type: string
 *                     example: My first post
 *                   content:
 *                     type: string
 *                     example: This is the content of my first publication.
 *                   created_at:
 *                     type: string
 *                     format: date-time
 *                     example: 2025-11-11T10:00:00.000Z
 */
router.get("/publication", searchAllPublicationsController);

/**
 * @swagger
 * /publication/{id}:
 *   get:
 *     summary: Search for a publication by ID.
 *     tags: [Publication]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the publication to be searched
 *     responses:
 *       200:
 *         description: Publication found successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 title:
 *                   type: string
 *                   example: My first publication
 *                 content:
 *                   type: string
 *                   example: This is the content of my first publication.
 *                 created_at:
 *                   type: string
 *                   format: date-time
 *                   example: 2025-11-11T10:00:00.000Z
 *       404:
 *         description: Publication not found
 */
router.get("/publication/:id", searchPublicationByIdController);

/**
 * @swagger
 * /publication/{id}:
 *   put:
 *     summary: Update an existing publication
 *     tags: [Publication]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the publication to be updated
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: New title of the publication
 *               content:
 *                 type: string
 *                 example: New updated content of the publication.
 *     responses:
 *       200:
 *         description: Publication updated successfully
 *       404:
 *         description: Publication not found
 *       500:
 *         description: Error updating the publication
 */
router.put("/publication/:id", updatePublicationByIdController);

/**
 * @swagger
 * tags:
 *   name: Comment
 *   description: Endpoints related to comments
 */

/**
 * @swagger
 * /comment:
 *   post:
 *     summary: Add a new comment
 *     tags: [Comment]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               publicationId:
 *                 type: integer
 *                 example: 1
 *               userId:
 *                 type: integer
 *                 example: 42
 *               content:
 *                 type: string
 *                 example: "This is a new comment!"
 *     responses:
 *       201:
 *         description: Comment created successfully
 */
router.post("/comment", createCommentController);

/**
 * @swagger
 * /comment:
 *   get:
 *     summary: Returns all comments
 *     tags: [Comment]
 *     responses:
 *       200:
 *         description: List of comments returned successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   content:
 *                     type: string
 *                     example: "Comment example"
 *                   userId:
 *                     type: integer
 *                     example: 42
 *                   publicationId:
 *                     type: integer
 *                     example: 10
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: 2025-11-11T10:00:00.000Z
 */
router.get("/comment", searchAllCommentsController);

/**
 * @swagger
 * /comment/{id}:
 *   get:
 *     summary: Search for a comment by ID.
 *     tags: [Comment]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the comment to be searched
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Comment found successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 content:
 *                   type: string
 *                   example: "Comment found successfully"
 *                 userId:
 *                   type: integer
 *                   example: 42
 *                 publicationId:
 *                   type: integer
 *                   example: 10
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: 2025-11-11T10:00:00.000Z
 *       404:
 *         description: Comment not found
 */
router.get("/comment/:id", searchCommentByIdController);

/**
 * @swagger
 * /comment/{id}:
 *   delete:
 *     summary: Remove a comment by ID
 *     tags: [Comment]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the comment to be removed
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       204:
 *         description: Comment removed successfully
 *       404:
 *         description: Comment not found
 */
router.delete("/comment/:id", deleteCommentByIdController);

export { router };
