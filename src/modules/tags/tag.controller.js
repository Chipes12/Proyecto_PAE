const Tag = require('./tag.model');

const TagsController = {
    getAll: (req, res) => {
        const tag = new Tag();
        tag.getAll().then(results => {
            res.send(results);
        }).catch(err => {
            res.sendStatus(500);
        });
    },
    getId: (req, res) => {
        const tag = new Tag();
        tag.getOne(req.params.id).then(result => {
            if(result) res.send(result);
            else res.sendStatus(404);
        }).catch(err => {
            res.sendStatus(500);
        });
    },
    create: (req, res) => {
        const tag = new Tag();
        tag.create(req.body).then(result => {
            if(result) res.sendStatus(201);
        }).catch(err => {
            res.sendStatus(500);
        });
    },
    update: (req, res) => {
        const tag = new Tag();
        tag.update(req.params.id, req.body).then(result => {
            if(result) res.sendStatus(200);
        }).catch(err => {
            res.sendStatus(500);
        });
    },
    delete: (req, res) => {
        const tag = new Tag();
        tag.delete(req.params.id).then(result => {
            if(result) res.sendStatus(200);
        }).catch(err => {
            res.sendStatus(500);
        });
    },
    count:(req, res) => {
        const tag = new Tag();
        tag.count().then(result => {
            if(result) res.status(200).send({count: result});
        }).catch(err => {
            res.sendStatus(500);
        });
    },
}

module.exports = TagsController;