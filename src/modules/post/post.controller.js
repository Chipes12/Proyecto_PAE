const Post = require('./post.model');

const PostsController = {
    getAll: (req, res) => {
        const post = new Post();
        post.getAll().then(results => {
            res.send(results);
        }).catch(err => {
            res.sendStatus(500);
        });
    },
    getOne: (req, res) => {
        const post = new Post();
        post.getOne(req.params.id).then(result => {
            if(result) res.send(result);
            else res.sendStatus(404);
        }).catch(err => {
            res.send(500);
        });
    },
    create: (req, res) => {
        const post = new Post();
        post.create(req.body).then(result => {
            if(result) res.sendStatus(201);
        }).catch(err => {
            res.sendStatus(500);
        });
    },
    update: (req, res) => {
        const post = new Post();
        post.update(req.params.id, req.body).then(result => {
            if(result) res.sendStatus(200);
        }).catch(err => {
            res.sendStatus(500);
        });
    },
    delete: (req, res) => {
        const post = new Post();
        post.delete(req.params.id).then(result => {
            if(result) res.sendStatus(200);
        }).catch(err => {
            res.sendStatus(500);
        });
    }
}

module.exports = PostsController;