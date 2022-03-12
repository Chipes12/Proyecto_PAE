const router = require('express').Router();
const controller = require('./post.controller');

router.route('/')
.get(controller.getAll)
.post(controller.create);

router.route('/:id')
.get(controller.getId)
.put(controller.update)
.delete(controller.delete);

module.exports = router;