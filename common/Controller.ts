import express from "express";
import {RequestType} from "./RequestType";

export abstract class Controller {
    public router = express.Router();
    public constructor() {
        this.router = express.Router();
    }
    public initializeRoute(requestType : RequestType ,path : string, fn : (request: express.Request, response: express.Response) => void): void {
        this.router[requestType](path, fn )
    }
}
