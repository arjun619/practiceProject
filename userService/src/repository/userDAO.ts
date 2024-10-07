import {User} from "../models/unusedModels/User";
import User2 from "../models/User2";
import express from "express";
import {userRequestDTO} from "../userDTO/userRequestDTO";

export class UserDAO {
    async getUserById(userId: string): Promise<User2 | null> {
        try {
            return User2.findByPk(userId);
        }
        catch (error) {
            throw error;
        }
    }

    async getAllUsers(): Promise<User2[]> {
        try {
            return User2.findAll();
        }
        catch (error) {
            throw error;
        }
    }

    async createUser(value: userRequestDTO) {
        const {name, email} = value;
        try {
            const dbEntry = await User2.create({name, email});
            console.log(dbEntry);
        }
        catch (error) {
            throw error;
        }

    }
}