const router = require('express').Router();
const controller = require('./forum.controller');

router.route('/')
  /**
   * @swagger
   *   /forums:
   *     get:
   *       tags:
   *       - Forums
   *       description: Get all forums
   *       responses:
   *         200:
   *           description: Array with a list of forums
   */
  .get(controller.getAll)
  /**
   * @swagger
   *   /forums:
   *     post:
   *       tags:
   *       - Forums
   *       description: Create a forum 
   *       parameters:
   *         - in: body
   *           name: forum
   *           description: what?, when? who? and why? of the forum
   *           schema:
   *              type: object
   *              required:
   *                  - title
   *                  - description
   *                  - author
   *                  - picture
   *              properties:
   *                  title:
   *                      type: String
   *                  description:
   *                      type: String
   *                  author:
   *                      type: String
   *                  picture:
   *                      type: Image
   *       responses:
   *         201:
   *           description: String with success message
   *         500:
   *           description: String with the error message
   */
  .post(controller.create);

  router.route('/count')
/**
 * @swagger
 *   /forums/count:
 *     get:
 *       tags:
 *       - Forums
 *       description: Get the total of forums
 *       responses:
 *         200:
 *           description: object with number of forums
 */
.get(controller.count);

router.route('/:id')
  /**
   * @swagger
   *   /forums/{id}:
   *     get:
   *       tags:
   *       - Forums
   *       description: Get one forum by ID
   *       parameters:
   *         - in: path
   *           name: id
   *           required: true
   *           description: The forum's unique ID
   *       responses:
   *         200:
   *           description: An object with the forum data
   *         500:
   *           description: String with the error message
   */
  .get(controller.getOne)
  /**
   * @swagger
   *   /forums/{id}:
   *     put:
   *       tags:
   *       - Forums
   *       description: update one forum by his id
   *       parameters:
   *         - in: path
   *           name: id
   *           required: true
   *           description: the unique forum id
   *         - in: body
   *           name: updates
   *           description: the changes you do to the forum
   *           schema:
   *              type: object
   *              optional:
   *                  - title
   *                  - description
   *                  - picture
   *              properties:
   *                  title:
   *                      type: String
   *                  description:
   *                      type: String
   *                  picture:
   *                      type: Image
   *       responses:
   *         200:
   *           description: String with success message
   *         500:
   *           description: String with the error message
   */
  .put(controller.update)
  /**
   * @swagger
   *   /forums/{id}:
   *     delete:
   *       tags:
   *       - Forums
   *       description: delete a specific forum with the id
   *       parameters:
   *         - in: path
   *           name: id
   *           required: true
   *           description: The forum's unique ID
   *       responses:
   *         200:
   *           description: String success message
   *         500:
   *           description: String with the error message
   */
  .delete(controller.delete);

module.exports = router;
