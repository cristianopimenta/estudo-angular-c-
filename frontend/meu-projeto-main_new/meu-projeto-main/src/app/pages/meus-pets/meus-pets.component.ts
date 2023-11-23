import { Component } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { environment } from 'src/environments/environment.development';
import { PacienteCadastrar } from '../models/model.pacientes';
import {Observable} from 'rxjs';
import { Pacientes } from '../models/model.pacientes';


@Component({
  selector: 'app-meus-pets',
  templateUrl: './meus-pets.component.html',
  styleUrls: ['./meus-pets.component.scss']
})
export class MeusPetsComponent {
  title = 'Listar meus Pacientes Pets';

  //paciente: Pacientes[] = [];
  paciente = new Observable<Pacientes[]>();

  //form
  id = '';
  nome = '';
  peso = '';
  data = '';
  sexo = '';
  especie = '';
  raca = '';


  constructor(private backend: BackendService) {

    console.log('Oieee', environment.api)
    this.obterPetsCadastrados();
  }

  obterPetsCadastrados() {
    //this.backend.buscarTodosPacientes().subscribe(paciente => this.paciente = paciente)

    this.paciente = this.backend.buscarTodosPacientes();

  }

  buttonClick(){
    if (!this.nome || !this.id)
      return;

    if (this.id) {
      this.atualizar();
      return;
    }

    this.backend.cadastrarPaciente({PacId: parseInt(this.id), Nome: this.nome, Data_Nascimento: this.data, Peso: this.peso, Raca: this.raca, Sexo: this.sexo, Especie: this.especie })
      .subscribe(_ => this.obterPetsCadastrados())
  }

  atualizar(){
    this.backend.editarPaciente({PacId: parseInt(this.id), Nome: this.nome, Data_Nascimento: this.data, Peso: this.peso, Raca: this.raca, Sexo: this.sexo, Especie: this.especie })
    .subscribe(_ => this.obterPetsCadastrados());
  }

  preencherCampos(paciente: Pacientes){
    this.id = paciente.PacId!.toString();
    this.nome = paciente.Nome;
    this.peso = paciente.Peso;
    this.raca = paciente.Raca;
    this.especie = paciente.Especie;
    this.sexo = paciente.Sexo;
    this.data = paciente.Data_Nascimento;
  }

  remover(id: number){
    this.backend.remover(id)
      .subscribe(_ => this.obterPetsCadastrados());
  }
}


