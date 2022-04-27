const router = require('express').Router();
const controller = require('./tag.controller');

router.route('/')
  /**
   * @swagger
   *   /tags:
   *     get:
   *       tags:
   *       - Tags
   *       description: Get all tags
   *       responses:
   *         200:
   *           description: Array with a list of tags
   */
.get(controller.getAll)
  /**
   * @swagger
   *   /tags:
   *     post:
   *       tags:
   *       - Tags
   *       description: Create a tag 
   *       parameters:
   *         - in: body
   *           name: tag
   *           description: forum? name
   *           schema:
   *              type: object
   *              required:
   *                  - name
   *                  - id_forum
   *              properties:
   *                  name:
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

router.route('/:id')
  /**
   * @swagger
   *   /tags/{id}:
   *     get:
   *       tags:
   *       - Tags
   *       description: Get one tag by ID
   *       parameters:
   *         - in: path
   *           name: id
   *           required: true
   *           description: The tag's unique ID
   *       responses:
   *         200:
   *           description: An object with the tag data
   *         500:
   *           description: String with the error message
   */
.get(controller.getId)
  /**
   * @swagger
   *   /tags/{id}:
   *     put:
   *       tags:
   *       - Tags
   *       description: update one tag by his id
   *       parameters:
   *         - in: path
   *           name: id
   *           required: true
   *           description: the tag's unique id
   *         - in: body
   *           name: updates
   *           description: the changes you do to the tag
   *           schema:
   *              type: object
   *              optional:
   *                  - name
   *              properties:
   *                  name:
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
   *   /tags/{id}:
   *     delete:
   *       tags:
   *       - Tags
   *       description: delete a specific tag with the id
   *       parameters:
   *         - in: path
   *           name: id
   *           required: true
   *           description: The tag's unique ID
   *       responses:
   *         200:
   *           description: String success message
   *         500:
   *           description: String with the error message
   */
.delete(controller.delete);

module.exports = router;