import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { VacinaComponent } from './pages/agendamento/vacina/vacina.component'; // Importe o componente Vacina
import { DonoComponent } from './pages/agendamento/dono/dono.component';
import { PetComponent } from './pages/agendamento/pet/pet.component';
import { OpcoesComponent } from './pages/mprincipal/opcoes.component';
import { MeusPetsComponent } from './pages/meus-pets/meus-pets.component';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { ConsultasComponent } from './pages/agendamento/consultas/consultas.component';
import { BanhoetosaComponent } from './pages/agendamento/banhoetosa/banhoetosa.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'vacina', component: VacinaComponent },
  { path: 'dono', component: DonoComponent }, // Adicione a rota 'dono'
  { path: 'pet', component: PetComponent },
  { path: 'opcoes', component: OpcoesComponent },
  { path: 'meus-pets', component: MeusPetsComponent },
  { path: 'agendamento', component: AgendamentoComponent },
  { path: 'consultas', component: ConsultasComponent },
  { path: 'banhoetosa', component: BanhoetosaComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

