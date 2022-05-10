const UserForum = require('./userForum.model');

const UserForumController = {
    getAll: (req, res) => {
        const userForum = new UserForum();
        userForum.getAll().then(results => {
            res.send(results);
        }).catch(err => {
            res.sendStatus(500);
        });
    },
    getId: (req, res) => {
        const userForum = new UserForum();
        userForum.getOne(req.params.id).then(result => {
            if(result) res.send(result);
            else res.sendStatus(404);
        }).catch(err => {
            res.sendStatus(500);
        });
    },
    create: (req, res) => {
        const userForum = new UserForum();
        userForum.create(req.body).then(result => {
            if(result) res.sendStatus(201);
        }).catch(err => {
            res.sendStatus(500);
        });
    },
    update: (req, res) => {
        const userForum = new UserForum();
        userForum.update(req.params.id, req.body).then(result => {
            if(result) res.sendStatus(200);
        }).catch(err => {
            res.sendStatus(500);
        });
    },
    delete: (req, res) => {
        const userForum = new UserForum();
        userForum.delete(req.params.id).then(result => {
            if(result) res.sendStatus(200);
        }).catch(err => {
            res.sendStatus(500);
        });
    },
    count:(req, res) => {
        const userForum = new UserForum();
        userForum.count().then(result => {
            if(result) res.status(200).send({count: result});
        }).catch(err => {
            res.sendStatus(500);
        });
    },
    searchUser: (req, res) => {
        const userForum = new UserForum();
        userForum.searchUser(req.params.id).then(result => {
            if(result) res.status(200).send(result);
        }).catch(err => {
            res.sendStatus(500);
        });
    },
    searchForum: (req, res) => {
        const userForum = new UserForum();
        userForum.searchForum(req.params.id).then(result => {
            if(result) res.status(200).send(result);
        }).catch(err => {
            res.sendStatus(500);
        });
    },
    searchUserForum: (req, res) => {
        const userForum = new UserForum();
        userForum.searchUserForum(req.params.idForum, req.params.idUser).then(result => {
            if(result) res.status(200).send(result);
        }).catch(err => {
            res.sendStatus(500);
        });
    }
}

module.exports = UserForumController;