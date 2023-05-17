let client = require('../dbconnection');
let collection = client.db('test').collection('Cats');

setTimeout(() => {
   collection = client.db().collection("Cats");
}, 2000)


function insert(cat, callback) {
    collection.insertOne(cat, callback);
    }
    
    function getAllCats(callback){
    collection.find().toArray(callback);
    }

module.exports = {insert, getAllCats}