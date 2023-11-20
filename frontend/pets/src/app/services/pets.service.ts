import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { EstoqueVacina, EstoqueVacinaCadastrar } from '../models/estoquevacina.models';


@Injectable({
  providedIn: 'root'
})
export class PetsService {

  private url = `${environment.api}/VacEstoque`;

  //injeção de dependencia
  constructor(private httpClient: HttpClient) { }

  buscarTodasVacinacoes() {
    return this.httpClient.get<EstoqueVacina[]>(this.url);
  }

  cadastrarVacinacao(vacinacao: EstoqueVacinaCadastrar) {
    return this.httpClient.post<EstoqueVacina>(this.url, vacinacao);
  }

  editarVacinacao(vacinacao: EstoqueVacina) {
    return this.httpClient.put<EstoqueVacina>(`${this.url}/${vacinacao.VaciId}`, vacinacao);
  }

  remover(id: number) {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }
}
