const express = require('express');
const app = express();

const db = require('./models');

const { Items } = require ('./models');

app.get('/select', (req, res) => {
    // where statement is used for finding specific data from the table 
    Items.findAll({ where: { gender: 'M' } }).then((Items) => {
        res.send(Items)
    })
    .catch((err) => {
        console.log(err);
    });
});

//app.get needs to be changed to app.post when connected to the front end 
app.get(`/insert`, (req, res) => {
    Items.create({
        //filled in variables need to be changed to inputs for the front end 
        gender: 'M',
        style: 'HD',
        size: 'L'
    }).catch(err => {
        if (err) {
            console.log(err);
        }
    });

    res.send(`insert`);
});

//app.get needs to be changed to app.delete when connected to the front end 
app.get('/delete', (req, res) => {
    // id is filled in variable for that needs to be change to dynamic var for front end inputs 
    Items.destory({ where: {id: 1} });
    res.send('delete');
});



db.sequelize.sync().then((req) => {
    app.listen(3001, () =>{
        console.log('server running');
    });    
});