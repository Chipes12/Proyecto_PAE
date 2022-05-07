const User = require('./user.model');

const UsersController = {
    getAll: (req, res) => {
        const user = new User();
        user.getAll().then(results => {
            if(results) res.send(results);
        }).catch(err => {
            res.sendStatus(500);
        });
    },
    getOne: (req, res) => {
        const user = new User();
        user.getOne(req.params.id).then(result => {
            if(result) res.send(result);
        }).catch(err => {
            res.sendStatus(404);
        });
    },
    create: (req, res) => {
        const user = new User();
        user.create(req.body).then(result => {
            if(result) res.sendStatus(201);
        }).catch(err => {
            res.send({error: err});
        });
    },
    update: (req, res) => {
        const user = new User();
        user.update(req.params.id, req.body, req.file).then(result => {
            if(result) res.sendStatus(200);
        }).catch(err => {
            res.send({error: err});
        });
    },
    delete: (req, res) => {
        const user = new User();
        user.delete(req.params.id).then(result => {
            if(result) res.sendStatus(200);
        }).catch(err => {
            res.send({error: err});
        });
    },
    login: (req, res) => {
        const user = new User();
        user.login(req.body).then(result => {
            if(result) res.send(result);
        }).catch(err => {
            res.send({error: err});
        })
    },
    count:(req, res) => {
        const user = new User();
        user.count().then(result => {
            if(result) res.status(200).send({count: result});
        }).catch(err => {
            res.sendStatus(500);
        });
    },
}

module.exports = UsersController;