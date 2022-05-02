const Database = require('../../core/database');
const Model = require('../../core/model');
const {ObjectId} = require('mongodb');

class Tag extends Model {
    constructor(){
        super('tags');
    }
    //getAll already implemented in model
    //getOne already implemented in model
    //delete already implemented in model
    //update already implemented in model

    create(body){
        return new Promise((accept, reject) => {
            if(!body.name || !body.id_forum) reject("Data is missing");
            else{
                Database.collection('forums').findOne({_id: ObjectId(body.id_forum)}, (err, result) => {
                    if(!result) reject('Not a real forum');
                    else {
                        let newTag = {
                            name: body.name,
                            id_forum: body.id_forum
                        };
                        this.collection.insertOne(newTag);
                        accept("Success");
                    }
                });
            }
        });
    }
}

module.exports = Tag;