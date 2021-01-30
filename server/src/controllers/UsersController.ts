import { Request, Response } from 'express';
import db from '../database/connection';
import bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';


export default class UsersController {
    
    async auth(req: Request, res: Response){
        const { email, pass } = req.body;
        console.log(req.body);
        
        const dbInfos = await db('users').select('*').where('email', '=', email);
        

        const authInfo = {
            auth: false
        }
        
        try {
            const userAuth = await bcrypt.compare(pass, dbInfos[0].pass);
    
            authInfo.auth = userAuth;

            const user = {
                id: dbInfos[0].id,
                name: dbInfos[0].name,
                last_name: dbInfos[0].last_name,
                email: dbInfos[0].email,
                avatar: dbInfos[0].avatar,
                whatsapp: dbInfos[0].whatsapp,
                bio: dbInfos[0].bio
    
            }
            
            if (userAuth) {
                const jwtoken = jwt.sign({id: dbInfos[0].id}, 'a_generic_secret');
                return res.status(200).json({ ...authInfo, token: jwtoken, user}).send();
            }else{
                return res.status(200).json({ ...authInfo, message: "invalid pass" }).send();
            }
            
        } catch (error) {
            return res.status(200).json({...authInfo, message: "unknown user" }).send();
            
        }
        
    }

    async create(req: Request, res: Response){
        const { name, last_name, email, pass } = req.body;
        const passHashed = await bcrypt.hash(pass, 10);

        db('users').insert({
            name,
            last_name,
            email,
            pass: passHashed
        })
        .then(() => {
            return res.status(201).json({message:"user saved"}).send();
        })
        .catch(err => {
            console.log(err);
            //verificar o status code http mais adequado para essa mensagem
            return res.status(200).json({message:`error ${err}`}).send();
        });
        
        
        
    }
}