const router = require('express').Router();
const controller = require('./role.controller');

router.route('/')
  /**
   * @swagger
   *   /roles:
   *     get:
   *       tags:
   *       - Roles
   *       description: Get all roles
   *       responses:
   *         200:
   *           description: Array with a list of roles
   */
.get(controller.getAll)
  /**
   * @swagger
   *   /roles:
   *     post:
   *       tags:
   *       - Roles
   *       description: Create a role 
   *       parameters:
   *         - in: body
   *           name: role
   *           description: what name, in which forum 
   *           schema:
   *              type: object
   *              required:
   *                  - name
   *              optional:
   *                  - color
   *              properties:
   *                  name:
   *                      type: String
   *                  color:
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
 *   /roles/count:
 *     get:
 *       tags:
 *       - Roles
 *       description: Get the total of roles
 *       responses:
 *         200:
 *           description: object with number of roles
 */
.get(controller.count);

router.route('/:id')
  /**
   * @swagger
   *   /roles/{id}:
   *     get:
   *       tags:
   *       - Roles
   *       description: Get one role by ID
   *       parameters:
   *         - in: path
   *           name: id
   *           required: true
   *           description: The role's unique ID
   *       responses:
   *         200:
   *           description: An object with the role data
   *         500:
   *           description: String with the error message
   */
.get(controller.getId)
  /**
   * @swagger
   *   /roles/{id}:
   *     put:
   *       tags:
   *       - Roles
   *       description: update one role by his id
   *       parameters:
   *         - in: path
   *           name: id
   *           required: true
   *           description: the role's unique id
   *         - in: body
   *           name: updates
   *           description: the changes you do to the role
   *           schema:
   *              type: object
   *              optional:
   *                  - name
   *                  - color
   *              properties:
   *                  name:
   *                      type: String
   *                  color:
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
   *   /roles/{id}:
   *     delete:
   *       tags:
   *       - Roles
   *       description: delete a specific role with the id
   *       parameters:
   *         - in: path
   *           name: id
   *           required: true
   *           description: The role's unique ID
   *       responses:
   *         200:
   *           description: String success message
   *         500:
   *           description: String with the error message
   */
.delete(controller.delete);

module.exports = router;