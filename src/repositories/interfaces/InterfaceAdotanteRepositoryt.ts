import AdotanteEntity from "../../entities/AdotanteEntity";

export default interface InterfaceAdotanteRepository{
    criaAdotante(adotante: AdotanteEntity): void;
    listaAdotantes(): Array<AdotanteEntity> | Promise<AdotanteEntity[]>;
    atualizaAdotante(id: number, adotante: AdotanteEntity): Promise<{ success: boolean, message?: string}> | void;
    deletaAdotante(id: number): Promise<{ success: boolean, message?: string}> | void;
}