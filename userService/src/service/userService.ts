import express from "express";
import {UserDAO} from "../repository/userDAO";
import User2 from "../models/User2";
import {UserObjectMappers} from "../mappers/userObjectMappers";

export class UserService {
    private userDAO: UserDAO;
    constructor(){
      this.userDAO = new UserDAO();
}
   async findOneUser(request: express.Request, response: express.Response): Promise<void> {
        try {
            const dbResponse= await this.userDAO.getUserById(request.params.id);
            response.send(dbResponse ? UserObjectMappers.toResponseDTO(dbResponse) : null);
        }
        catch (error) {
            console.log(error);
            response.send(error);
        }
    }

    async findAllUsers(request: express.Request, response: express.Response) : Promise<void> {
        try {
            const dbResponse = await this.userDAO.getAllUsers();
            response.send(dbResponse ? UserObjectMappers.toResponseDTOs(dbResponse) : null);
        }
        catch (error) {
            console.log(error);
            response.send(error);
        }
    }

    async createNewUser(request: express.Request, response: express.Response) : Promise<void> {
        try {
            const dbResponse= await this.userDAO.createUser(UserObjectMappers.requestToRequestDTOMapper(request));
            response.send(dbResponse);
        }
        catch (error) {
            console.log(error);
            response.send(error);
        }

    }
}