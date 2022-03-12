const router = require('express').Router();
const controller = require('./userForum.controller');

router.route('/:id')
.get(controller.getAll)
.post(controller.create);

router.route('/:id/:userid')
.get(controller.getId)
.put(controller.update)
.delete(controller.delete);

module.exports = router;