// backend.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Paciente, PacienteCadastrar } from '../pages/models/model.pacientes';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class BackendService {

    private url = `${environment.api}/pacientes`;
  
    //injeção de dependencia
    constructor(private httpClient: HttpClient) { }
  
    obterPacientes() {
      return this.httpClient.get<Paciente[]>(this.url).pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Erro na solicitação HTTP:', error);
          // Trate o erro como necessário, por exemplo, retorne um array vazio
          return ([]);
        })
      );
    }
  
    cadastrarPaciente(paciente: PacienteCadastrar) {
      return this.httpClient.post<Paciente>(this.url, paciente).pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Erro na solicitação HTTP:', error);
          // Trate o erro como necessário, por exemplo, retorne um array vazio
          return ([]);
        })
      );
    }
  
    editarPaciente(paciente: Paciente) {
      return this.httpClient.put<Paciente>(`${this.url}/${paciente.id}`, paciente);
    }
  
    remover(id: number) {
      return this.httpClient.delete<void>(`${this.url}/${id}`);
    }
  }

