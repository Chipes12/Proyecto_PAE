const router = require('express').Router();
const controller = require('./userForum.controller');

router.route('/')
  /**
   * @swagger
   *   /userForums:
   *     get:
   *       tags:
   *       - Users-Forums
   *       description: Get all users in forums
   *       responses:
   *         200:
   *           description: Array with a list of users in forums
   */
.get(controller.getAll)
  /**
   * @swagger
   *   /userForums:
   *     post:
   *       tags:
   *       - Users-Forums
   *       description: Create a a user to a forum
   *       parameters:
   *         - in: body
   *           name: user
   *           description: who? where? and how?
   *           schema:
   *              type: object
   *              required:
   *                  - id_user
   *                  - id_forum
   *                  - id_role
   *              properties:
   *                  id_user:
   *                      type: String
   *                  id_role:
   *                      type: String
   *                  id_forum:
   *                      type: String
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
 *   /userForums/count:
 *     get:
 *       tags:
 *       - Users-Forums
 *       description: Get the total of userForums
 *       responses:
 *         200:
 *           description: object with number of userForums
 */
.get(controller.count);

router.route('/:id')
  /**
   * @swagger
   *   /userForums/{id}:
   *     get:
   *       tags:
   *       - Users-Forums
   *       description: Get one user in the forum by ID
   *       parameters:
   *         - in: path
   *           name: id
   *           required: true
   *           description: The user's unique ID
   *       responses:
   *         200:
   *           description: An object with the user data
   *         500:
   *           description: String with the error message
   */
.get(controller.getId)
  /**
   * @swagger
   *   /userForums/{id}:
   *     put:
   *       tags:
   *       - Users-Forums
   *       description: update one user in a forum by his id
   *       parameters:
   *         - in: path
   *           name: id
   *           required: true
   *           description: the user's unique id
   *         - in: body
   *           name: updates
   *           description: the changes you do to the user
   *           schema:
   *              type: object
   *              optional:
   *                  - id_role
   *                  - id_forum
   *                  - id_user
   *              properties:
   *                  id_user:
   *                      type: String
   *                  id_forum:
   *                      type: String
   *                  id_role:
   *                      type: String
   *       responses:
   *         200:
   *           description: String with success message
   *         500:
   *           description: String with the error message
   */      
.put(controller.update)
  /**
   * @swagger
   *   /userForums/{id}:
   *     delete:
   *       tags:
   *       - Users-Forums
   *       description: delete a specific user in forum with the id
   *       parameters:
   *         - in: path
   *           name: id
   *           required: true
   *           description: The user's unique ID
   *       responses:
   *         200:
   *           description: String success message
   *         500:
   *           description: String with the error message
   */
.delete(controller.delete);

module.exports = router;