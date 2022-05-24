import { Request, Response } from "express"
import { serviceRecados } from "../service/serviceRecados"

export default class RecadosController {
    async index(request: Request, response: Response) {
       const service = new serviceRecados()
       const recados = await service.find()
       return response.json(recados.map(recado => {
           return{
               id: recado.id,
               descricao: recado.descricao,
               detelhes: recado.detalhes
           }
       }))
    }    

    async store(request: Request, response: Response) {
        const {descricao, detalhes} = request.body
        const service = new serviceRecados()
        const recados = service.create({
            descricao: descricao,
            detalhes: detalhes
        })

        return response.json(recados)
    }

    async update(request: Request, response: Response) {
        const {descricao, detalhes} = request.body
        const {id} = request.params
        const service = new serviceRecados()
        const recados = service.update({
            id: parseInt(id),
            descricao: descricao,
            detalhes: detalhes
        })
    }

    async delete(request: Request, response: Response) {
        const {id} = request.params
        const service = new serviceRecados()
        service.delete(parseInt(id))
        return response.status(404)
    }
}