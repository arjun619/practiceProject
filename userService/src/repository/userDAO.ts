import {User} from "../models/unusedModels/User";
import User2 from "../models/User2";
import express from "express";
import {userRequestDTO} from "../userDTO/userRequestDTO";
import {Logger} from "winston";
import {LoggerService} from "../../../common/Logger/loggerService";

export class UserDAO {
    logger : LoggerService;
    constructor() {
        this.logger = new LoggerService();
    }
    async getUserById(userId: string): Promise<User2 | null> {
            return User2.findByPk(userId);
    }

    async getAllUsers(): Promise<User2[]> {
            return User2.findAll();
    }

    async createUser(value: userRequestDTO) {
        const {name, email} = value;
        const dbEntry = await User2.create({name, email});
        this.logger.logInfo("user added successfully.");


    }
}