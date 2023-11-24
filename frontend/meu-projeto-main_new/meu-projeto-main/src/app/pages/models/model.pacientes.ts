export interface Pacientes {

    id?: number,
    nome: string,
    data_nascimento: string,
    peso: string
    raca: string,
    especie: string,
    sexo: string

}

export type PacienteCadastrar = Omit<Pacientes, 'PacId'>;