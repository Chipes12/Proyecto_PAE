const Model = require('../../core/model');

class User extends Model {
    constructor(){
        super('users');
    }
    //getAll already implemented in model
    //getOne already implemented in model
    //delete already implemented in model
    //update already implemented in model
    create(body) {
        return new Promise((accept, reject) => {
            if(!body.username || !body.password || !body.email) reject('Data is missing');
            this.collection.findOne({email: body.email}, (err, result) => {
                if(result) reject('Mail already in use');
                else {
                    let newUser = {
                        username: body.username,
                        password: body.password,
                        email: body.email,
                        profile_picture: body.profile_picture,
                        role_id: body.role_id
                    }
                    this.collection.insertOne(newUser);
                    accept('Success');
                }
            });
        });
    }
}

module.exports = User;