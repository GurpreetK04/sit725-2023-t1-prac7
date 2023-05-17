var express = require('express');
var app = express();
require("./dbConnection"); 
let route = require("./route/route"); 
var http = require('http').createServer(app);
var io = require('socket.io')(http);


app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', route);


io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {

    console.log('user disconnected');
  });
  setInterval(()=>{

    socket.emit('number', parseInt(Math.random()*10));

  }, 1000);
});

//MongoDB connection
//const MongoClient = require('mongodb').MongoClient;
//const uri = 'mongodb+srv://kaurbanwait46:admin@cluster0.sc9swk7.mongodb.net/?retryWrites=true&w=majority'
//const client = new MongoClient(uri, {useNewUrlParser: true})
//let dbCollection;

//Project Collection
//function dbConnection(collectionName) {
//  client.connect(err => {
//        dbCollection = client.db().collection(collectionName);
//       if(!err){
//            console.log('DB Connected')
//           console.log(dbCollection);
//        }
//      else {
//            console.error(err);
//            process.exit(1);
//        }
//    });
//}

//insert project
//const insertcat = (cat,callback) => {
//dbCollection.insertOne(cat, callback);
//}
//post api
//app.post('/api/cats',(req,res) => {
//    let cat = req.body;
//  var newProject = req.body;
//    insertcat(newProject,(err,result) => {
//        if(err){
//            res.json({statusCode: 400, message: err})
//        }
//        else {
//            res.json({statusCode: 200, message: "Cat Successfully added", data: result})
//        }
//    });
//});

//app.get('/api/cats',(req,res) => {
//    getAllCats((err, result) => {
//        if (err) {
//            res.json({statusCode: 400, message: err});
//        } else {
//    res.json({statusCode: 200, data: cardList, message:'Successful'})
//       }
//    });
//})


var port = process.env.port || 3000;

http.listen(port,()=>{
    console.log('App listening to: ' + port);
//    dbConnection('Cats');
})
