import {Controller} from '../../../common/Controller'
import {RequestType} from "../../../common/RequestType";
import User2 from "../models/User2";
import express, {request} from "express";
import {UserService} from "../service/userService";

export class userController extends Controller{

    userService:UserService;

    public constructor() {
        super();
        this.userService = new UserService();
        this.initializeRoutes()

    }
    initializeRoutes(): void{
        this.initializeRoute(RequestType.GET, "/getAllUsers",this.userService.findAllUsers.bind(this.userService))
        this.initializeRoute(RequestType.GET, "/getUserById/:id",this.userService.findOneUser.bind(this.userService))
        this.initializeRoute(RequestType.POST,"/createUser",this.userService.createNewUser.bind(this.userService))
    }
}