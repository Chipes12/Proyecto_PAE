const Database = require('../../core/database');
const Model = require('../../core/model');
const {ObjectId} = require('mongodb');

class UserForum extends Model {
    constructor(){
        super('forums');
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
                    let newForum = {
                        user: body.user,
                        forum: body.forum,
                        role: body.role,
                        createdAt: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
                    };
                    this.collection.insertOne(newForum);
                    accept("Success");
                }
            });
        });
    }
}

module.exports = UserForum;