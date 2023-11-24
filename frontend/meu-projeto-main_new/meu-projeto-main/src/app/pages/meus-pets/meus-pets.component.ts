import { Component } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { environment } from 'src/environments/environment.development';
import {Observable} from 'rxjs';
import { Paciente } from '../models/model.pacientes';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-meus-pets',
  templateUrl: './meus-pets.component.html',
  styleUrls: ['./meus-pets.component.scss']
})

export class MeusPetsComponent {
postar() {
throw new Error('Method not implemented.');
}
  title = 'Listar meus Pacientes Pets';
  
  paciente$ = new Observable<Paciente[]>();
 

  //form
  id = '';
  nome = 'Novo Registro';
  peso = '';
  data = '';
  sexo = '';
  especie = '';
  raca = '';


  constructor(private backend: BackendService) {

    //console.log('Minha API', environment.api)
    this.obterPetsCadastrados();
  }

  obterPetsCadastrados() { 
    this.paciente$ = this.backend.obterPacientes();
  }

  buttonClick(){
    if (!this.nome)
      return;

    if (this.id) {
      this.atualizar();
      return;
    }

    this.backend.cadastrarPaciente({nome: this.nome, data: this.data, peso: this.peso, raca: this.raca, sexo: this.sexo, especie: this.especie })
      .subscribe(_ => this.obterPetsCadastrados())
  }

  atualizar(){
    this.backend.editarPaciente({id: parseInt(this.id), nome: this.nome, data: this.data, peso: this.peso, raca: this.raca, sexo: this.sexo, especie: this.especie })
    .subscribe(_ => this.obterPetsCadastrados());
  }

  preencherCampos(paciente: Paciente){
    this.id = paciente.id!.toString();
    this.nome = paciente.nome;
    this.peso = paciente.peso;
    this.raca = paciente.raca;
    this.especie = paciente.especie;
    this.sexo = paciente.sexo;
    this.data = paciente.data;
  }

  remover(id: number){
    this.backend.remover(id)
      .subscribe(_ => this.obterPetsCadastrados());
  }
}


