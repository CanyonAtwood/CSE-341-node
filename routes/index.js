const routes=require('express').Router();


routes.get('/', (req,res) =>{
    res.send("Elder Ridge Atwood!!!");
});

module.exports=routes;
//smile