// backend.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Pacientes } from '../pages/models/model.pacientes';

@Injectable({
  providedIn: 'root'
})


export class BackendService {

    private url = `${environment.api}/Pacientes`;
  
    //injeção de dependencia
    constructor(private httpClient: HttpClient) { }
  
    buscarTodosPacientes() {
      return this.httpClient.get<Pacientes[]>(this.url);
    }
  
    cadastrarPaciente(paciente: Pacientes) {
      return this.httpClient.post<Pacientes>(this.url, paciente);
    }
  
    editarPaciente(paciente: Pacientes) {
      return this.httpClient.put<Pacientes>(`${this.url}/${paciente.PacId}`, paciente);
    }
  
    remover(id: number) {
      return this.httpClient.delete<void>(`${this.url}/${id}`);
    }
  }

