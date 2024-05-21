import { Repository } from "typeorm";
import InterfaceAdotanteRepository from "./interfaces/InterfaceAdotanteRepositoryt";
import AdotanteEntity from "../entities/AdotanteEntity";

export default class AdotanteRepository implements InterfaceAdotanteRepository{
    private repository: Repository<AdotanteEntity>;

    constructor(repository: Repository<AdotanteEntity>){
        this.repository = repository;
    }

    criaAdotante(adotante: AdotanteEntity): void {
        this.repository.save(adotante);
    }
    async listaAdotantes(): Promise<AdotanteEntity[]> {
        return await this.repository.find();
    }
    async atualizaAdotante(id: number, newData: AdotanteEntity): Promise<{ success: boolean; message?: string }> {
        try{
            const adotanteToUpdate = await this.repository.findOne({ where: { id }})

            if(!adotanteToUpdate){
                return { success: false, message: "Adotante não encontrado" }
            }

            Object.assign(adotanteToUpdate, newData);
            await this.repository.save(adotanteToUpdate);

            return { success: true }
        } catch(error){
            return {
                success: false,
                message: "Ocorreu um erro ao tentar atualizar o adotante"
            };
        }
    }
    async deletaAdotante(id: number): Promise<{ success: boolean; message?: string }> {
        try{
            const adotanteToDelete = await this.repository.findOne({ where: { id }});

            if(!adotanteToDelete){
                return { success: false, message: "Adotante não encontrado" }
            }

            await this.repository.remove(adotanteToDelete);

            return { success: true }
        } catch(error){
            return {
                success: false,
                message: "Ocorreu um erro ao tentar atualizar o adotante"
            };
        }
    }
}