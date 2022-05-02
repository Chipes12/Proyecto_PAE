const Database = require('../../core/database');
const Model = require('../../core/model');
const {ObjectId} = require('mongodb');

class Comment extends Model {
    constructor(){
        super('comments');
    }
    //getAll already implemented in model
    //getOne already implemented in model
    //delete already implemented in model
    //update already implemented in model

    create(body){
        return new Promise((accept, reject) => {
            if(!body.id_post || !body.message || !body.id_user) reject("Data is missing");
            else{
                if(body.id_reply){
                    Database.collection('comments').findOne({_id:ObjectId(body.id_reply)}, (err, result) => {
                        if(!result) reject('Not a valid reply');
                    });
                }
                Database.collection('posts').findOne({_id: ObjectId(body.id_post)}, (err, result) => {
                    if(!result) reject('Not a real post');
                    else {
                        let newComment = {
                            id_post: body.id_post,
                            id_reply: body.id_reply,
                            id_user: body.id_user,
                            message: body.message
                        };
                        this.collection.insertOne(newComment);
                        accept("Success");
                    }
                });
            }
        });
    }
}

module.exports = Comment;