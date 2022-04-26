const Database = require('../../core/database');
const Model = require('../../core/model');
const {ObjectId} = require('mongodb');

class Role extends Model {
    constructor(){
        super('role');
    }
    //getAll already implemented in model
    //getOne already implemented in model
    //delete already implemented in model
    //update already implemented in model

    create(body){
        return new Promise((accept, reject) => {
            if(!body.name || !body.forum) reject("Data is missing");
            Database.collection('forums').findOne({_id: ObjectId(body.forum)}, (err, result) => {
                if(!result) reject('Forum dont exist');
                else {
                    if(result.roles.includes(body.name)) reject("Role already exist");
                    else{
                        let newRole = {
                            name: body.name,
                            color: body.color || 'gray',
                            icon: body.icon,
                            forum: body.forum
                        };
                        this.collection.insertOne(newRole).then(result => {
                            let insertedId = {roleId: result.insertedId.toString()};
                            Database.collection('forums').updateOne({_id: ObjectId(body.forum)}, {$push: {roles: {insertedId}}});
                            accept('Success');
                        });
                    }
                }
            });
        });
    }
}

module.exports = Role;