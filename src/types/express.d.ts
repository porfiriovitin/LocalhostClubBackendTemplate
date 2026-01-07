/// :: Default permission schema for user.

declare namespace Express {
    export interface Request{
        user:{
            id:Number,
            role: String
        }
    }
}