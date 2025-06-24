
import {NextFunction,Request, Response} from "express";
import {ZodSchema } from "zod";



export const validate = (schema: ZodSchema<any>)=>(
    req: Request, res:Response, next:NextFunction)=>{

        try{
            schema.parse({...req.body});
            next();
        }catch(error){
            // eslint-disable-next-line no-console
            console.log(error);
            res.status(400).json({
                success: false,
                message: "Bad request",
            });
        }
    };
