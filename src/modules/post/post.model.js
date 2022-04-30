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

    create(body, file){
        let content;
        if(body.content) content = body.content;
        else {
            if(file != undefined) content = file.filename;
        }        
        return new Promise((accept, reject) => {
            if(!body.title || !content || !body.id_author || !body.id_forum) reject('Data is missing');
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
                                    content: body.content || ('public/images/'+ file.filename),
                                    id_author: body.id_author,
                                    id_forum: body.id_forum,
                                    createdAt: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
                                }

                                this.collection.insertOne(newPost);
                                accept('Success');
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
                    let content = '';
                    if(body.content){
                        content = body.content
                    } else{
                        content = 'public/images/'+ file.filename;
                    }
                    let upgrade = {
                        title: body.title || result.title,
                        content: content || result.content
                    }
                    accept(this.collection.updateOne({_id: ObjectId(id)}, {$set: upgrade}));
                } else{
                    reject("No post found");
                }
            });
        });
    }
}
module.exports = Post;