var express = require('express');
var bodyParser = require('body-parser');
var connection = require('./connection');
var app = express();
//use middlewares (below 2 lines are required to accept input submitted via post/put/delete method)
app.use(express.urlencoded({ 'extended': true }))
app.use(bodyParser.json());

//localhost:5000/person
//to insert new person
//method : post
// input : name, dob, salary, gender, photo (required)

app.post("/person", function (req, res) {
    let { name, dob, salary, gender, photo } = req.body;

    if (name === undefined || dob === undefined || salary === undefined || gender === undefined || photo === undefined) {
        res.json([{ 'error': 'required input missing, kindly pass name, dob, salary, gender, photo' }]);
    }
    else {
        var sql = `insert into person (name,dob,salary,gender,photo) values ('${name}','${dob}','${salary}','${gender}','${photo}')`;
        connection.con.query(sql, function (error, result) {
            if (error)
                res.json([{ 'error': 'oops, something went wrong, contact developer' }]);
            else {
                res.json([{'error':'no'},{'message':'person inserted'}]);
            }
        });
    }
});



//localhost:5000/person
//to update person
//method : put
// input : id, name, dob, salary, gender, photo (required)

app.put("/person", function(req,res){
    let{ id, name, dob, salary, gender, photo } = req.body;
    if (name === undefined || dob === undefined || salary === undefined || gender === undefined || photo === undefined) {
        res.json([{ 'error': 'required input missing, kindly pass id, name, dob, salary, gender, photo' }]);
    }
    else {
        var sql = `update person set name='${name}', dob='${dob}', salary='${salary}', gender='${gender}', photo='${photo}' where id=${id}`;
        connection.con.query(sql, function (error, result) {
            if (error)
                res.json([{ 'error': 'oops, something went wrong, contact developer' }]);
            else {
                if(result.affectedRows === 0)
                {
                    res.json([{'error':'no'},{'message':'person not found'}]);
                }
                else 
                {
                    res.json([{'error':'no'},{'message':'person updated'}]);
                }
            }
        });
    }
});


//localhost:5000/person
//to delete a person
//method : delete
//input : id (required)

app.delete("/person",function(req,res){
    var id = req.body.id;
    if(id === undefined)
        res.json([{'error':'required input missing, kindly pass id'}]);
    else
    {
        var sql = `delete from person where id=${id}`;
        connection.con.query(sql,function(error,result){
            if(error)
                res.json([{'error':'oops, something went wrong, contact developer'}]);
            else 
            {
                if(result.affectedRows === 0)
                {
                    res.json([{'error':'no'},{'message':'person not found'}]);
                }
                else 
                {
                    res.json([{'error':'no'},{'message':'person deleted'}]);
                }
            }
        })
    }
});


//localhost:5000/person
//to display all person
//method : get
//input : none

app.get("/person",function(req,res){
    var sql = "select * from person order by name";
    connection.con.query(sql,function(error,result){
        if(error){
            res.json([{'error':'oops, something went wrong, contact developer'}]);
        }
        else{
            result.unshift({'Total records': result.length});
            res.json(result);
        }
    })
});


app.listen(5000);
console.log('ready to accept request');