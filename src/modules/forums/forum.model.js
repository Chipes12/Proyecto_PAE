const Database = require('../../core/database');
const Model = require('../../core/model');
const {ObjectId} = require('mongodb');

class Forum extends Model {
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
                        title: body.title,
                        description: body.description,
                        author: body.author,
                        createdAt: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
                        updatedAt: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
                        posts: [],
                        roles: [admin, common],
                    };
                    this.collection.insertOne(newForum);
                    accept("Success");
                }
            });
        });
    }
}

module.exports = Forum;