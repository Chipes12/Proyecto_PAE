const Database = require('../../core/database');
const Model = require('../../core/model');
const {ObjectId} = require('mongodb');

class Post extends Model {
    constructor(){
        super('posts');
    }
    //getAll already implemented in model
    //getOne already implemented in model
    //delete already implemented in model
    //update already implemented in model

    create(body){
        return new Promise((accept, reject) => {
            if(!body.title || !body.content || !body.id_author || !body.id_forum) reject('Data is missing');
            else{
                Database.collection('users').findOne({_id: ObjectId(body.id_author)}, (err, result) => {
                    if(!result) reject('Not a real user');
                    else {
                        Database.collection('forums').findOne({_id: ObjectId(body.id_forum)}, (err, result) => {
                            if(!result) reject('Not a real forum');
                            else {
                                let today = new Date();
                                let newPost = {
                                    title: body.title,
                                    content: body.content,
                                    id_author: body.id_author,
                                    id_forum: body.id_forum,
                                    createdAt: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
                                }
                                this.collection.insertOne(newPost)
                                accept('Success');
                            }
                        });
                    }
                });
            }
        });
    }
}
module.exports = Post;