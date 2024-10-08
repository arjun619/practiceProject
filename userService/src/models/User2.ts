import {DataTypes, Model, Sequelize} from "sequelize";
import {sequelize} from "../database/dbSequelize";


class User2 extends Model {}

User2.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdDate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: true
        }
    },
    {
        sequelize,
        modelName: 'User2',
        timestamps: false
    }
);

export default User2;