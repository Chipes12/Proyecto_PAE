const router = require('express').Router();
const controller = require('./post.controller');

router.route('/')
  /**
   * @swagger
   *   /posts:
   *     get:
   *       tags:
   *       - Posts
   *       description: Get all posts
   *       responses:
   *         200:
   *           description: Array with a list of posts
   */
.get(controller.getAll)
  /**
   * @swagger
   *   /forums:
   *     post:
   *       tags:
   *       - Posts
   *       description: Create a post 
   *       parameters:
   *         - in: body
   *           name: post
   *           description: what?, when? who? and why? of the post
   *           schema:
   *              type: object
   *              required:
   *                  - title
   *                  - content
   *                  - author
   *                  - forum
   *              properties:
   *                  title:
   *                      type: String
   *                  content:
   *                      type: any
   *                  author:
   *                      type: String
   *                  forum:
   *                      type: String
   *       responses:
   *         201:
   *           description: String with success message
   *         500:
   *           description: String with the error message
   */
.post(controller.create);

router.route('/:id')
  /**
   * @swagger
   *   /posts/{id}:
   *     get:
   *       tags:
   *       - Posts
   *       description: Get one post by ID
   *       parameters:
   *         - in: path
   *           name: id
   *           required: true
   *           description: The post's unique ID
   *       responses:
   *         200:
   *           description: An object with the post data
   *         500:
   *           description: String with the error message
   */
.get(controller.getOne)
  /**
   * @swagger
   *   /posts/{id}:
   *     put:
   *       tags:
   *       - Posts
   *       description: update one post by his id
   *       parameters:
   *         - in: path
   *           name: id
   *           required: true
   *           description: the post's unique id
   *         - in: body
   *           name: updates
   *           description: the changes you do to the forum
   *           schema:
   *              type: object
   *              optional:
   *                  - title
   *                  - content
   *              properties:
   *                  title:
   *                      type: String
   *                  content:
   *                      type: any
   *       responses:
   *         200:
   *           description: String with success message
   *         500:
   *           description: String with the error message
   */        
.put(controller.update)
  /**
   * @swagger
   *   /posts/{id}:
   *     delete:
   *       tags:
   *       - Posts
   *       description: delete a specific post with the id
   *       parameters:
   *         - in: path
   *           name: id
   *           required: true
   *           description: The post's unique ID
   *       responses:
   *         200:
   *           description: String success message
   *         500:
   *           description: String with the error message
   */
.delete(controller.delete);

module.exports = router;