import {Controller} from '../../../common/Controller'
import {RequestType} from "../../../common/RequestType";
import User2 from "../models/User2";
import express, {request} from "express";

export class userController extends Controller{

    public constructor() {
        super();
        this.initializeRoutes()
    }
    initializeRoutes(): void{
        this.initializeRoute(RequestType.GET, "/getAllUsers",this.findAllUsers)
        this.initializeRoute(RequestType.GET, "/getUserById/:id",this.findUserById)
        this.initializeRoute(RequestType.POST,"/createUser",this.createUser)
    }

    async findAllUsers(request : express.Request, response: express.Response): Promise<void>{
        const dbEntry = await User2.findAll();
        response.status(201).send(dbEntry);
    }
    async findUserById(request : express.Request, response: express.Response): Promise<void>{
        const res = await User2.findByPk(request.params.id);
        try {
            response.send(res);
        }
        catch (error) {
            response.status(500).send(error);
        }
    }
    async createUser(request : express.Request, response: express.Response): Promise<void>{
        const {name, email} = request.body;
        try {
            const dbEntry = await User2.create({name, email});
            response.status(201).send(dbEntry);
        }
        catch (error) {
           console.log(error);
           response.status(500).send(error);
        }
    }
}