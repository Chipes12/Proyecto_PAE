const Database = require('../../core/database');
const Model = require('../../core/model');
const {ObjectId} = require('mongodb');
const { accepts } = require('express/lib/request');
//const jwt = require('jsonwebtoken');
//const tokenKey = process.env.TOKEN_KEY;
//const port = process.env.PORT;

class Forum extends Model {
    constructor(){
        super('forums');
    }
    //getAll already implemented
    //getOne already implemented
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
                        "title": body.title,
                        "description": body.description,
                        "author": body.author,
                        "createdAt": today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
                        "updatedAt": today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
                        "tags" : null,
                        "posts": null
                    };
                    this.collection.save(newForum);
                    accept("Success");
                }
            });
        });
    }
}

module.exports = Forum;