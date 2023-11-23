export interface Pacientes {

    PacId?: number,
    Nome: string,
    Data_Nascimento: string,
    Peso: string
    Raca: string,
    Especie: string,
    Sexo: string

}

export type PacienteCadastrar = Omit<Pacientes, 'PacId'>;