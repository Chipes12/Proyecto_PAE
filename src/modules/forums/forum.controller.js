const Forum = require('./forum.model');

const ForumsController = {
    getAll: (req, res) => {
        const forum = new Forum();
        forum.getAll().then(results => {
            res.send(results);
        }).catch(err => {
            res.sendStatus(500);
        });
    },
    getOne: (req, res) => {
        const forum = new Forum();
        forum.getOne(req.params.id).then(result => {
            if(result) res.send(result);
            else res.sendStatus(404);
        }).catch(err => {
            res.sendStatus(500);
        });
    },
    create: (req, res) => {
        const forum = new Forum();
        forum.create(req.body, req.file).then(result => {
            if(result) res.sendStatus(201);
        }).catch(err => {
            res.sendStatus(500);
        });
    },
    update: (req, res) => {
        const forum = new Forum();
        forum.update(req.params.id, req.body, req.file).then(result => {
            if(result) res.sendStatus(200);
        }).catch(err => {
            res.sendStatus(500);
        });
    },
    delete: (req, res) => {
        const forum = new Forum();
        forum.delete(req.params.id).then(result => {
            if(result) res.sendStatus(200);
        }).catch(err => {
            res.sendStatus(500);
        });
    }
}

module.exports = ForumsController;