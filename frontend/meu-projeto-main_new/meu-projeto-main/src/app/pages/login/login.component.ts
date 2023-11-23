import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  mensagemLogin: string = '';
  mensagemLoginStyle: string = ''; // Novo atributo para controlar a classe de estilo da mensagem
  isLoggedIn: boolean = false;

  btnLogin() {
    // Simulando uma verificação de login com usuário e senha válidos
    if (this.username === 'admin' && this.password === 'admin') {
      this.mensagemLogin = 'Bem Vindo! Acesse o Menu lateral!'; // Exibindo a mensagem de boas-vindas
      this.mensagemLoginStyle = 'login-success'; // Define a classe de estilo para a mensagem de sucesso
      this.isLoggedIn = true; // Definindo o usuário como autenticado
      this.openSideMenu(); // Abrindo o menu lateral
      // Limpar os campos do formulário em caso de erro de login
      this.username = ''; // Limpa o campo de nome de usuário
      this.password = ''; // Limpa o campo de senha

    } else {
      this.mensagemLogin = 'Dados Inválidos! Tente outra vez!';
      this.mensagemLoginStyle = 'login-error'; // Define a classe de estilo para a mensagem de

      // Limpar os campos do formulário em caso de erro de login
      this.username = ''; // Limpa o campo de nome de usuário
      this.password = ''; // Limpa o campo de senha
    }
  }
  openSideMenu() {
    // Lógica para abrir o menu lateral, por exemplo, definindo uma variável para controlar a exibição do menu
    // this.showSideMenu = true; // Esta variável estaria vinculada à visibilidade do menu no template
    // Aqui você iria implementar a lógica para mostrar o menu lateral
  }
}
