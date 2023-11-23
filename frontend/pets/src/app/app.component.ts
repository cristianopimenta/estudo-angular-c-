import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./main/login/login.component";
import { PetsService } from './services/pets.service';
import { EstoqueVacina, EstoqueVacinaCadastrar } from './models/estoquevacina.models';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, LoginComponent]
})
export class AppComponent {
  title = 'pets';

    // vacinacao: Vacinacao[] = []
    estoquevacinas$ = new Observable<EstoqueVacina[]>();

    // form
    id = '';
    nome_vacina = 'teste';
    quantidade = '';
  
    constructor(private petsService: PetsService){
      this.obterPetsCadastradas();
    }
  
    obterPetsCadastradas(){  
      this.estoquevacinas$ = this.petsService.buscarTodasVacinacoes();
    }
  
    buttonClick(){
      if (!this.quantidade || !this.nome_vacina)
        return;
  
      if (this.id) {
        this.atualizar();
        return;
      }
  
      this.petsService.cadastrarVacinacao({ VaciId: this.id, Nome_Vacina: this.nome_vacina })
        .subscribe(_ => this.obterPetsCadastradas())
    }
  
    atualizar(){
      this.petsService.editarVacinacao({ 
        VaciId: parseInt(this.id), Nome_Vacina: this.nome_vacina, Quantidade: this.quantidade })
      .subscribe(_ => this.obterPetsCadastradas());
    }
  
    preencherCampos(estoquevacina: EstoqueVacina){
      this.id = estoquevacina.VaciId!.toString();
      this.nome_vacina = estoquevacina.Nome_Vacina.toString();
      this.quantidade = estoquevacina.Quantidade.toString();
    }
  
    remover(id: number){
      this.petsService.remover(id)
        .subscribe(_ => this.obterPetsCadastradas());
    }
  }
  