//const {Router} = require('express');
import{Router} from 'express'

const routes = new Router();

routes.get('/',(req,res)=>{
    return res.json({message: "Hello world willyan!"})
})

//module.exports = routes;
export default routes;