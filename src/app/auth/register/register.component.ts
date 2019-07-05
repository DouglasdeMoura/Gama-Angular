import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = '';
  password = '';
  checkPassword = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  enviar() {
    console.log(this.email, this.password, this.checkPassword);

    if(this.checkPassword !== this.password) {
      alert('Senhas não coincidem');
      return;
    }

    this.authService.createAccount(this.email, this.password)
      .subscribe(value => {
      alert('Usuário criado com sucesso')
      console.log(value);
    });

  }
}
