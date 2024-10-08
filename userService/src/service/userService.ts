import express from "express";
import {UserDAO} from "../repository/userDAO";
import User2 from "../models/User2";
import {UserObjectMappers} from "../mappers/userObjectMappers";
import {LoggerService} from "../../../common/Logger/loggerService";

export class UserService {
    private userDAO: UserDAO;
    private logger: LoggerService;
    constructor(){
      this.userDAO = new UserDAO();
      this.logger = new LoggerService();
}
   async findOneUser(request: express.Request, response: express.Response): Promise<void> {
        try {
            const dbResponse= await this.userDAO.getUserById(request.params.id);
            this.logger.logInfo(dbResponse?.toJSON().toString())
            response.send(dbResponse ? UserObjectMappers.toResponseDTO(dbResponse) : null);

        }
        catch (error) {
            if (error instanceof Error) {
                this.logger.logError('Error fetching user: ' + error.message);
            } else {
                this.logger.logError('An unknown error occurred'); // Handle unknown types
            }
            response.status(500).send({ message: 'Internal Server Error' });
        }
    }

    async findAllUsers(request: express.Request, response: express.Response) : Promise<void> {
        try {
            const dbResponse = await this.userDAO.getAllUsers();
            this.logger.logInfo(dbResponse[0]?.toJSON().toString())
            response.send(dbResponse ? UserObjectMappers.toResponseDTOs(dbResponse) : null);
        }
        catch (error) {
            if (error instanceof Error) {
                this.logger.logError('Error fetching user: ' + error.message);
            } else {
                this.logger.logError('An unknown error occurred'); // Handle unknown types
            }
            response.status(500).send({ message: 'Internal Server Error' });
        }
    }

    async createNewUser(request: express.Request, response: express.Response) : Promise<void> {
        try {
            const dbResponse= await this.userDAO.createUser(UserObjectMappers.requestToRequestDTOMapper(request));
            response.send("User created successfully");
        }
        catch (error) {
            if (error instanceof Error) {
                this.logger.logError('Error fetching user: ' + error.message);
            } else {
                this.logger.logError('An unknown error occurred'); // Handle unknown types
            }
            response.status(500).send({ message: 'Internal Server Error' });
        }

    }
}