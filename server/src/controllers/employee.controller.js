import bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';
import { error, success } from "../utills/responseWrapper.js";
import dotenv from 'dotenv';
import generateAccessToken from "../services/generateAccessToken.js"
import employeeModel from '../models/employee.model.js';
import studentModel from '../models/student.model.js';
import { insertStudent } from '../services/student.service.js';
dotenv.config();

const secret_key = process.env.ACCESS_SECRET_KEY;

export async function signupController(req,res){
    try {
        console.log('signup called');
        const {firstname,lastname,email,password} = req.body;
        if(!firstname || !lastname || !email ||!password){
            return res.send(error(400,"all fields required!"));
        }

        const oldUser = await employeeModel.findOne({email});
        if(oldUser){
            return res.send(error(400,"employee already registered"));
        }

        const hashedPassword = await bcrypt.hash(password,10);
        req.body["password"] = hashedPassword;
        const user = await employeeModel.create(req.body);
        return res.send(success(201,"employee created successfully!"));

    } catch (err){
        return res.send(error(500,e.message));
    }
}

export async function loginController(req,res){
    try {
        const {email,password} = req.body;
        console.log(req.body);
        if(!email || !password){
            return res.send(error(400,"all fields are required"));
        }

        const user = await employeeModel.findOne({email});
        if(!user){
            return res.send(error(404,"user is not registered!"));
        }

        const matched = await bcrypt.compare(password,user.password);
        if(!matched){
            return res.send(error(404,"incorrect password"));
        }

        const accessToken = generateAccessToken({...user});
        return res.send(success(200,{accessToken,firstname:user.firstname}));
        
    } catch (err) {
        return res.send(error(500,err.message));
    }
}



