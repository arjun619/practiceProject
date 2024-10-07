import express , {Request, Response} from 'express';
import { router } from './routes/userRoutes';
import {sequelize} from "./database/dbSequelize";
import {Controller} from "../../common/Controller";
import {userController} from "./routes/userController";


const app = express();
const port = process.env.PORT || 3000;
const userController1 = new userController();

app.use(express.json());

// app.use('/', router);
app.use('/',userController1.router)


const start = async () => {
    try {
        await sequelize.sync(); // Sync the database
        console.log('Database synced!');
        app.listen(3000, () => {
            console.log('Server running on port 3000');
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

start();