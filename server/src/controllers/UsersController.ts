import { Request, Response } from 'express';
import db from '../database/connection';
import bcrypt from 'bcrypt';


export default class UsersController {
    
    async auth(req: Request, res: Response){
        const { email, pass } = req.body;
        const dbInfos = await db('users').select('pass', 'id').where('email', '=', email);
        
        try {
            const userAuth = await bcrypt.compare(pass, dbInfos[0].pass);
    
            const authInfo = {
                auth: userAuth
            }
    
            if (userAuth) {
                return res.status(200).json({ user_id: dbInfos[0].id, ...authInfo }).send();
            }else{
                return res.status(200).json({ ...authInfo }).send();
            }
            
        } catch (error) {
            return res.status(200).json({ message: "unknown user" }).send();
            
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