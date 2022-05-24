import express from 'express'
import cors from 'cors'

import Database from './database/connections/database';
import RecadosRota from './routers/recadosRota';


export default class Application {
    readonly #express: express.Application;

    constructor() {
        this.#express = express();
    }

    async init() {        
        this.config();
        // this.middlewares();
        this.routers();
        await this.database();
    }

    start(port: number) {
        this.#express.listen(port, () => {
            console.log(`A aplicação está rodando na porta ${port}...`); 
        });
    }

    private config() {
        this.#express.use(express.json());
        this.#express.use(express.urlencoded({ extended: false }));
        this.#express.use(cors());
    }

    private routers() {
        const recadosRouter = new RecadosRota().init()
        this.#express.use(recadosRouter)
    }

    private async database() {
        await Database.getInstance();
    }
};