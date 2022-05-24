import { RecadosRepository } from "../database/repositories/RecadosRepository";
import { RecadosDTO } from "../DTO/RecadosDTO";

export class serviceRecados {
    async find() {
        const repositories = new RecadosRepository()
        const recados = repositories.find()
        return recados
    }

    async create(recadosDTO: RecadosDTO) {
        const repositories = new RecadosRepository()
        const recados = await repositories.create(recadosDTO)
        return recados
    }

    async update(recadosDTO: RecadosDTO) {
        const repositories = new RecadosRepository()
        const recados = await repositories.update(recadosDTO)
        return recados
    }

    async delete(id: number) {
        const repositories = new RecadosRepository()
        return await repositories.delete(id)
    }
}