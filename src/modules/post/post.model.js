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
            if(!body.title || !body.content || !body.author || !body.forum) reject('Data is missing');
            Database.collection('users').findOne({_id: ObjectId(body.author)}, (err, result) => {
                if(!result) reject('Not a real user');
                else {
                    Database.collection('forums').findOne({_id: ObjectId(body.forum)}, (err, result) => {
                        if(!result) reject('Not a real forum');
                        else {
                            let today = new Date();
                            let newPost = {
                                title: body.title,
                                content: body.content,
                                author: body.author,
                                forum: body.forum,
                                comments: [],
                                createdAt: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
                            }
                            let newForumPost = new Array();
                            this.collection.insertOne(newPost).then(result => {
                                let insertedId = {postId: result.insertedId.toString()};
                                Database.collection('forums').updateOne({_id: ObjectId(body.forum)}, {$push: {posts: {insertedId}}});
                                accept('Success');
                            });
                        }
                    });
                }
            });
        });
    }
}
module.exports = Post;