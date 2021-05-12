import User from '../models/User';
import jwt from 'jsonwebtoken'
import config from '../Config'
import { token } from 'morgan';

export const signup = async(req,res) =>{
   const {username,email,pass,roles}= req.body;


   
   const newUser= new User({
       username,
       email,
       pass:  await User.encryptPassword(pass),
   });

const saveUser =  await newUser.save();

const token = jwt.sign({id: saveUser._id},config.SECRECT, {
    expiresIn:86400 
})

   res.json(token);
}

export const signin = async(req,res) =>{
    res.json('Sigunin')
}