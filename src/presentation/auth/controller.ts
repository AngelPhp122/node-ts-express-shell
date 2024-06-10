import { Request, Response } from "express";


export class AuthController {
    constructor(){}

    regiterUser = (request: Request, response: Response) => {
        response.json('registerUser');
    }

    loginUser = (request: Request, response: Response) => {
        response.json('loginUser');
    }

    validateEmail = (request: Request, response: Response) => {
        response.json('validateEmail')
    }
}