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
            if(!body.title || !body.description || !body.author) reject("Data is missing");
            Database.collection('users').findOne({_id: ObjectId(body.author)}, (err, result) => {
                if(!result) reject('Not a real user');
                else {
                    let today = new Date();
                    let newRole = {
                        name: body.name,
                        color: body.color,
                        icon: body.icon,
                        createdAt: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
                    };
                    this.collection.insertOne(newRole);
                    accept("Success");
                }
            });
        });
    }
}

module.exports = Role;