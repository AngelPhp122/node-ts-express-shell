import { Request, Response } from "express";
import { RegisterUserDto } from "../../domain";
import { AuthService } from "../services/auth.services";


export class AuthController {
    constructor(
        public readonly authService: AuthService,

    ){}

    registerUser = (request: Request, response: Response) => {
        const [error, registerDto] = RegisterUserDto.create(request.body);
        if(error) return response.status(400).json({error});

       this.authService.registerUser(registerDto!)
       .then((user)=> response.json(user))

    }

    loginUser = (request: Request, response: Response) => {
        response.json('loginUser');
    }

    validateEmail = (request: Request, response: Response) => {
        response.json('validateEmail')
    }
}