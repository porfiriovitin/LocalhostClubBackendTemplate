import { NextFunction, Request, Response } from "express";

export class DemoController{
    async index (req:Request, res:Response, next:NextFunction){
        return res.status(200).json({message: "Hello World!"})
    }
}