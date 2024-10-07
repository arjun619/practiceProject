import {Request, Response, Router} from 'express';
import User2 from "../models/User2";

export const router = Router();

router.get('/', (request: Request, res: Response) => {
    console.log("reached here")
    res.send("Hello World!");
})

router.post('/createUser', async (request: Request, res: Response) => {
    const {name, email} = request.body;
    try {
        const dbEntry = await User2.create({name, email});
        res.status(201).send(dbEntry);
    }
    catch (error) {
        res.status(500).send(error);
    }
})

router.get('/getAllUsers', async (request: Request, res: Response) => {
    try {
        const dbEntry = await User2.findAll();
        res.status(200).send(dbEntry);
    }
    catch (error) {
        res.status(500).send(error);
    }
})

router.get('/getUserById/:id', async (request: Request, res: Response) => {
    try {
        const result = await User2.findByPk(request.params.id);
        res.send(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
})



