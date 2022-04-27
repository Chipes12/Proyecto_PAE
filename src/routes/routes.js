const router = require('express').Router();

const forumRoutes = require('./../modules/forums/forum.routes');
const postRoutes = require('./../modules/post/post.routes');
const roleRoutes = require('./../modules/roles/role.routes');
const tagRoutes = require('../modules/tags/tag.routes');
const userForumRoutes = require('./../modules/userForum/userForum.routes');
const userRoutes = require('./../modules/users/user.routes');
const commentRoutes = require('./../modules/comments/comment.routes');

router.use('/forums', forumRoutes);
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/roles', roleRoutes);
router.use('/tags', tagRoutes);
router.use('/userForums', userForumRoutes);
router.use('/comments', commentRoutes);

module.exports = router;