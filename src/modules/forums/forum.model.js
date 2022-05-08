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

    create(body, file){
        return new Promise((accept, reject) => {
            if(!body.title || !body.description || !body.id_author || !file) reject("Data is missing");
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
                                    picture: 'public/images/'+ file.filename,
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
    update(id, body, file){
        return new Promise((accept, reject) => {
            this.collection.findOne({_id: ObjectId(id)}, (err, result) => {
                if(result){
                    let today = new Date();
                    let upgrade = {};
                    if(file){
                        upgrade = {
                            title: body.title || result.title,
                            description: body.description || result.description,
                            picture: 'public/images/'+ file.filename,
                            updatedAt: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
                        }
                    } else{
                        upgrade = {
                            title: body.title || result.title,
                            description: body.description || result.description,
                            picture: result.picture,
                            updatedAt: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
                        }
                    }
                    accept(this.collection.updateOne({_id: ObjectId(id)}, {$set: upgrade}));
                } else{
                    reject("No forum found");
                }
            });
        });
    }
}

module.exports = Forum;