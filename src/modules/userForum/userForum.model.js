const Database = require('../../core/database');
const Model = require('../../core/model');
const {ObjectId} = require('mongodb');

class UserForum extends Model {
    constructor(){
        super('users_forum');
    }
    //getAll already implemented in model
    //getOne already implemented in model
    //delete already implemented in model
    //update already implemented in model

    create(body){
        return new Promise((accept, reject) => {
            if(!body.id_user || !body.id_forum || !body.id_role) reject("Data is missing");
            else{
                Database.collection('users').findOne({_id: ObjectId(body.id_user)}, (err, result) => {
                    if(!result) reject('Not a real user');
                    else{
                        this.collection.findOne({id_user: body.id_user, id_forum: body.id_forum}, (err, result) => {
                            if(result) reject('Already created');
                            else{
                                Database.collection('forums').findOne({_id: ObjectId(body.id_forum)}, (err, result) => {
                                    if(!result) reject('Not a real forum');
                                    else{
                                        Database.collection('roles').findOne({_id: ObjectId(body.id_role)}, (err, result) => {
                                            if(!result) reject('Not a real role');
                                            else {
                                                let newUserForum = {
                                                    id_user: body.id_user,
                                                    id_forum: body.id_forum,
                                                    id_role: body.id_role,
                                                };
                                                this.collection.insertOne(newUserForum);
                                                accept("Success");
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
}

module.exports = UserForum;