export type Paciente = {

    id: number,
    nome: string,
    data: string,
    peso: string
    raca: string,
    especie: string,
    sexo: string

}

export type PacienteCadastrar = Omit<Paciente, 'id'>;