const mongoose = require('mongoose');
const express = require('express');
const Consin = require('../models/configment.model');
const ConRoute= express.Router();
const cors = require('cors');
ConRoute.use(cors())
ConRoute.get('/',async(req,res)=>{
 try{
        let consignments =await  Consin.find();

        res.send(consignments);
    }catch(e){
        res.send({e:e.message});
    }
});
ConRoute.post('/',async(req,res)=>{
    try{
        let consignment = new Consin(req.body);
        await consignment.save();
        res.send(consignment);
    }catch(e){
        res.send({e:e.message});
    }
});
ConRoute.delete("/:id", async (req, res) => {
    let { id } = req.params
    try {
        let data = await Consin.findByIdAndDelete(id)
        res.send(data)
    } catch (er) {
        res.status(404).send(er.message)
    }
})
ConRoute.patch("/:id", async (req, res) => {
    let { id } = req.params
    try {
        let update = await Consin.findByIdAndUpdate(id, req.body);
        res.send(update)
    } catch (er) {
        res.status(404).send(er.message)
    }
})
ConRoute.get("/:id", async (req, res) => {
    let { id } = req.params
    try {
        let Data = await Consin.findById(id);
        res.send(Data);
    } catch (er) {
        res.status(404).send(er.message)
    }
})


module.exports = ConRoute;