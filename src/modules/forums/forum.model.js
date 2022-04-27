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
            if(!body.title || !body.description || !body.id_author) reject("Data is missing");
            else{
                Database.collection('users').findOne({_id: ObjectId(body.id_author)}, (err, result) => {
                    if(!result) reject('Not a real user');
                    else {
                        this.collection.findOne({title: body.title}, (err, result) => {
                            if(result) reject('There is a forum with this name already');
                            else{
                                let today = new Date();
                                let newForum = {
                                    title: body.title,
                                    description: body.description,
                                    id_author: body.id_author,
                                    createdAt: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
                                    updatedAt: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
                                };
                                this.collection.insertOne(newForum);
                                accept("Success");
                            }
                        });
                    }
                });
            }
        });
    }
}

module.exports = Forum;