const Role = require('./role.model');

const RolesController = {
    getAll: (req, res) => {
        const role = new Role();
        role.getAll().then(results => {
            res.send(results);
        }).catch(err => {
            res.sendStatus(500);
        });
    },
    getId: (req, res) => {
        const role = new Role();
        role.getOne(req.params.id).then(result => {
            if(result) res.send(result);
            else res.sendStatus(404);
        }).catch(err => {
            res.sendStatus(500);
        });
    },
    create: (req, res) => {
        const role = new Role();
        role.create(req.body).then(result => {
            if(result) res.sendStatus(201);
        }).catch(err => {
            res.send(500);
        });
    },
    update: (req, res) => {
        const role = new Role();
        role.update(req.params.id, req.body).then(result => {
            if(result) res.sendStatus(200);
        }).catch(err => {
            res.sendStatus(500);
        });
    },
    delete: (req, res) => {
        const role = new Role();
        role.delete(req.params.id).then(result => {
            if(result) res.sendStatus(200);
        }).catch(err => {
            res.sendStatus(500);
        });
    }
}

module.exports = RolesController;