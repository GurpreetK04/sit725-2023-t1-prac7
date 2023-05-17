let model = require('../model/model')

const createCat = (req,rest) => {
    let cat = req.body;
        var newProject = req.body;
        model.insertCat(newProject,(err,result) => {
            if(err){
                res.json({statusCode: 400, message: err})
            }
            else {
                res.json({statusCode: 200, message: "Cat Successfully added", data: result})
            }
    });
}

const getAllCats = (req,rest) => {
    model.getAllCats((err, result) => {
               if (err) {
                    res.json({statusCode: 400, message: err});
                } else {
            res.json({statusCode: 200, data: cardList, message:'Successful'})
                }
        });
}


module.exports = {createCat, getAllCats}