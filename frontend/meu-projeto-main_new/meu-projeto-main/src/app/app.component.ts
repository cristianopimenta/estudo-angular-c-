import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'meu-projeto';
  showFiller = false;
  // Defina a propriedade 'isAgendamentoMenuOpen'
  isAgendamentoMenuOpen: boolean = false;

  constructor(private router: Router) {}

  toggleAgendamentoMenu() {
    this.isAgendamentoMenuOpen = !this.isAgendamentoMenuOpen;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
    this.isAgendamentoMenuOpen = false; // Feche o submenu após a seleção
  }
}


