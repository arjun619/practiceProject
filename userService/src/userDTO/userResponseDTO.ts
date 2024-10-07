import {DataTypes} from "sequelize";



export interface userResponseDTO {
    id: number,
    name: string,
    email: string,
    createdAt: typeof DataTypes.DATE,
}