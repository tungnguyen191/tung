var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('customer', ['customer']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/customer', function (req, res) {
    console.log('get requeses');
    db.customer.find(function (err, docs) {
        console.log(docs);
        res.json(docs);
    });
});

app.post('/InsertCustomer', function (req, res) {
    //in du lieu ra
    console.log(req.body);
    db.customer.insert(req.body, function (err, docs) {
        res.json(docs);
    });
});

app.delete('/DeleteCustomer/:id', function (req, res){
    var id = req.params.id;
    console.log(id);
    db.customer.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
        res.json(doc);
    });
});


app.listen(3000);
console.log('loading server');