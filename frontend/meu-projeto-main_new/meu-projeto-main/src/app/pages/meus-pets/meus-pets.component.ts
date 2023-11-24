import { Component } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { environment } from 'src/environments/environment.development';
import { PacienteCadastrar } from '../models/model.pacientes';
import {Observable} from 'rxjs';
import { Pacientes } from '../models/model.pacientes';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-meus-pets',
  templateUrl: './meus-pets.component.html',
  styleUrls: ['./meus-pets.component.scss']
})
export class MeusPetsComponent {
  title = 'Listar meus Pacientes Pets';

 // paciente: Pacientes[] = [];
  paciente = new Observable<Pacientes[]>();

  //form
  id = '';
  nome = 'teste';
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

    this.backend.cadastrarPaciente({id: parseInt(this.id), nome: this.nome, data_nascimento: this.data, peso: this.peso, raca: this.raca, sexo: this.sexo, especie: this.especie })
      .subscribe(_ => this.obterPetsCadastrados())
  }

  atualizar(){
    this.backend.editarPaciente({id: parseInt(this.id), nome: this.nome, data_nascimento: this.data, peso: this.peso, raca: this.raca, sexo: this.sexo, especie: this.especie })
    .subscribe(_ => this.obterPetsCadastrados());
  }

  preencherCampos(paciente: Pacientes){
    this.id = paciente.id!.toString();
    this.nome = paciente.nome;
    this.peso = paciente.peso;
    this.raca = paciente.raca;
    this.especie = paciente.especie;
    this.sexo = paciente.sexo;
    this.data = paciente.data_nascimento;
  }

  remover(id: number){
    this.backend.remover(id)
      .subscribe(_ => this.obterPetsCadastrados());
  }
}


