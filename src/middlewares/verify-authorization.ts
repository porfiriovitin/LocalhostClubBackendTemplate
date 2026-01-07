import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError.js";

/// :: Middleware to verify if the user has the required role(s) to access a route.
/// :: Usage: verifyAuthorization(['admin', 'user'])

export function verifyAuthorization(allowedRoles: string[]) {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.user || !allowedRoles.includes(req.user?.role)){
            throw new AppError("Unauthorized", 401);
        }

        return next();
    }
}