import {userRequestDTO} from "../userDTO/userRequestDTO";
import User2 from "../models/User2";
import {userResponseDTO} from "../userDTO/userResponseDTO";
import express from "express";
import {UserValidator} from "../validators/userValidator";

export class UserObjectMappers {
    static requestToRequestDTOMapper(userRequest: express.Request) : userRequestDTO {
        return  {
            name: userRequest.body.name,
            email: userRequest.body.email,
        }
    }

    static toResponseDTO(user: User2): userResponseDTO | null {
        if (UserValidator.validateUser(user)){
            return {
                id: user.getDataValue('id'),
                name: user.getDataValue('name'),
                email: user.getDataValue('email'),
                createdAt: user.getDataValue('createdDate')
            };
        }
        else {
            return null;
        }

    }
    static toResponseDTOs(users: User2[]): userResponseDTO[] {

        return users
            .filter(user => UserValidator.validateUser(user))
            .map(user => ({
            id: user.getDataValue('id'),
            name: user.getDataValue('name'),
            email: user.getDataValue('email'),
            createdAt: user.getDataValue('createdDate')
        }));
    }
}