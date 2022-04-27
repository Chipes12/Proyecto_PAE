const Model = require('../../core/model');

class Role extends Model {
    constructor() {
        super('roles');
    }
    //getAll already implemented in model
    //getOne already implemented in model
    //delete already implemented in model
    //update already implemented in model

    create(body) {
        return new Promise((accept, reject) => {
            if (!body.name) reject("Data is missing");
            else{
                this.collection.findOne({name: body.name}, (err, result) => {
                    if (result) reject('Role already exists');
                    else {
                        let newRole = {
                            name: body.name,
                            color: body.color || 'gray',
                        };
                        this.collection.insertOne(newRole);
                        accept('Success');
                    }
                });
            }
        });
    }
}

module.exports = Role;