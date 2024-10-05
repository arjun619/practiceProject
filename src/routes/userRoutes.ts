import {Request, Response, Router} from 'express';
import {pool} from "../database/mysql";
import {User} from "../models/User";

export const router = Router();

router.get('/', (request: Request, res: Response) => {
    console.log("reached here")
    res.send("Hello World!");
})

router.post('/createUser', async (request: Request, res: Response) => {
    const user: User = request.body;
    try {
        const [result] = await pool.query('INSERT INTO users (name, email) VALUES (?, ?)', [user.name, user.email]);
        res.status(201).send(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
})

router.get('/getAllUsers', async (request: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.status(200).send(result[0]);
    }
    catch (error) {
        res.status(500).send(error);
    }
})

router.get('/getUserById/:id', async (request: Request, res: Response) => {
    try {
        const result = await pool.query('select * from users where id = ?', [request.params.id]);
        res.send(result[0]);
    }
    catch (error) {
        res.status(500).send(error);
    }
})

