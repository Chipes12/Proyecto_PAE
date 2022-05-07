const router = require('express').Router();
const controller = require('./user.controller');
const upload = require('../../core/multer');

router.route('/')
  /**
   * @swagger
   *   /users:
   *     get:
   *       tags:
   *       - Users
   *       description: Get all user
   *       responses:
   *         200:
   *           description: Array with a list of users
   */
.get(controller.getAll)
  /**
   * @swagger
   *   /users:
   *     post:
   *       tags:
   *       - Users
   *       description: Create a user 
   *       parameters:
   *         - in: body
   *           name: user
   *           description: email?, user? password? of the user
   *           schema:
   *              type: object
   *              optional:
   *                  - profile_picture 
   *              required:
   *                  - username
   *                  - password
   *                  - email
   *              properties:
   *                  username:
   *                      type: String
   *                  password:
   *                      type: String
   *                  email:
   *                      type: String
   *                  profile_picture:
   *                      type: image
   *       responses:
   *         201:
   *           description: String with success message
   *         500:
   *           description: String with the error message
   */
.post(upload.single('archivo'), controller.create);

router.route('/count')
/**
 * @swagger
 *   /users/count:
 *     get:
 *       tags:
 *       - Users
 *       description: Get the total of users
 *       responses:
 *         200:
 *           description: object with number of users
 */
.get(controller.count);

router.route('/:id')
  /**
   * @swagger
   *   /users/{id}:
   *     get:
   *       tags:
   *       - Users
   *       description: Get one user by ID
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
.get(controller.getOne)
  /**
   * @swagger
   *   /users/{id}:
   *     put:
   *       tags:
   *       - Users
   *       description: update one user by his id
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
   *                  - username
   *                  - password
   *                  - profile_picture
   *                  - email
   *              properties:
   *                  username:
   *                      type: String
   *                  password:
   *                      type: String
   *                  email:
   *                      type: String
   *                  profile_picture:
   *                      type: File
   *       responses:
   *         200:
   *           description: String with success message
   *         500:
   *           description: String with the error message
   */       
.put(upload.single('archivo'), controller.update)
  /**
   * @swagger
   *   /users/{id}:
   *     delete:
   *       tags:
   *       - Users
   *       description: delete a specific user with the id
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

router.route('/login')
  /**
   * @swagger
   *   /users/login:
   *     post:
   *       tags:
   *       - Users
   *       description: Start a session 
   *       parameters:
   *         - in: body
   *           name: credentials
   *           description: the data to initiate the session
   *           schema:
   *              type: object
   *              required:
   *                  - password
   *                  - email
   *              properties:
   *                  password:
   *                      type: String
   *                  email:
   *                      type: String
   *       responses:
   *         200:
   *           description: String with the session token
   *         500:
   *           description: String with the error message
   */
.post(controller.login);

module.exports = router;