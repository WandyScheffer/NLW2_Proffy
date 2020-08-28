import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { promisify } from 'util';

// interface AuthRequest extends Request {
//     userId: Number
// }


// I should change auth type
const auth:any = async ( req:Request, res:Response, next:NextFunction ) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).send({ error: "No token provided" });
    }

    // const [scheme, token] = authHeader.split(" ");


    try {
        // const decoded = await promisify(jwt.verify)(token, "secret");
        // I should change decoded type 
        const decoded:any = await promisify(jwt.verify)(authHeader, "a_generic_secret");
        console.log(decoded);
        req.body = { ...req.body, userId:decoded.id};
        console.log('Valid token, everything ok!');
        
        return next();
    } catch (err) {
        console.log(err);
        // console.log("error...");
        return res.status(401).send({ error: "Token invalid" });
    }
}

export default auth;