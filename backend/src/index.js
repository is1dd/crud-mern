const express = require('express')
const mongoose = require('mongoose');
const ConRoute = require('./routes/confignment.routes');
const app = express();
const cors = require('cors');
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(cors());
app.use('/cons',ConRoute);
app.get('/', (req, res) => ()=>{
    res.send("Hello aman")
})
mongoose.connect('mongodb://127.0.0.1:27017').then((res)=>{
    app.listen(8080, async() => {
       
        console.log('server started on port 8080')
    })
})