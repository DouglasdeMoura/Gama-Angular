import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    console.log(this.email, this.password);
    this.authService.login(this.email, this.password)
      .subscribe((value: any) => {
        alert('Acesso autorizado!');
        localStorage.setItem('token', value.idToken);
        this.authService.setUser({
          id: value.localId,
          email: value.email
        });
        console.log(value);
        this.router.navigateByUrl('/');
      },
      error => {
        console.log(error);
        switch (error.error.error.message) {
          case 'EMAIL_NOT_FOUND':
            alert('E-mail não encontrado');
            break;
          case 'INVALID_PASSWORD':
            alert('Senha inválida');
            break;
          default:
            alert('Houve um erro');
            break;
        }

      });
  }

}
