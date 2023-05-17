require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://kaurbanwait46:admin@cluster0.sc9swk7.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, {useNewUrlParser: true})


client.connect(err => {
        if(!err){
            console.log('DB Connected')
        }
        else {
            console.error(err);
            process.exit(1);
        }
});

module.exports = client; 

