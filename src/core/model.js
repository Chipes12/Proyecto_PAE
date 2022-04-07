const Database = require('./database');
const { ObjectId } = require('mongodb');


class Model {
    collection;

    constructor(collectionName) {
        this.collection = Database.collection(collectionName);
    }

    getAll() {
        return new Promise((accept, reject) => {
            this.collection.find().toArray((err, results) => {
             if (err) reject(err);
             else accept(results);
            });
        });
    }

    getOne(id) {
        return this.collection.findOne({
            _id: ObjectId(id)
        });
    }
    delete(id){
        return this.collection.deleteOne({
            _id: ObjectId(id)
        });
    }
    update(id, upgrade){
        return this.collection.updateOne({_id: ObjectId(id)}, {$set: upgrade});
    }
}

module.exports = Model;