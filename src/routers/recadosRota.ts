import { Router } from "express";
import RecadosController from "../controllers/recadosController";

export default class RecadosRota {
    init() {
        const routers = Router()
        const controller = new RecadosController()
        routers.get('/recados', controller.index)
        routers.post('/recados', controller.store)
        routers.put('/recados/:id', controller.update)
        routers.delete('/recados/:id', controller.delete)
        return routers
    }
}