import User2 from "../models/User2";
import {isEmail} from "class-validator";


export abstract class UserValidator {
    public static validateUser(user: User2) : boolean {
        const id = user.getDataValue('id');
        const name = user.getDataValue('name');
        const email = user.getDataValue('email');
        const createdAt = user.getDataValue('createdDate');

        if (!id){
            console.log("Id cannot be null")
            return false
        }

        if (!name || name.trim() === '') {
            console.error('Invalid User: Name cannot be empty');
            return false;
        }
        if (!email.isNull && !isEmail(email)) {
            console.error('Invalid User: Invalid email format');
            return false;
        }
        const createdDate = new Date(createdAt);
        if (!createdAt || isNaN(createdDate.getTime())) {
            console.error('Invalid User: Invalid createdDate');
            return false;
        }

        return true;


    }
}