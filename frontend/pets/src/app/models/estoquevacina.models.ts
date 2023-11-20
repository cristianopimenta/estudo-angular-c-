export interface EstoqueVacina{
  VaciId?: number,
  Nome_Vacina: string,
  Quantidade: number,
  Descricao: string,
  Data_Fabricacao: string,
  Lote: number,
  Refrigeracao: string
    
}

export type EstoqueVacinaCadastrar = Omit<EstoqueVacina, 'id'>;