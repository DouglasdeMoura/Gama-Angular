import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo/todo.service';
import { map, debounceTime } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';
// Pesquise 'rxjs operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  contador = 0;

  email = '';

  constructor(public todoService: TodoService, private authService: AuthService) {  }

  logout() {
    localStorage.removeItem('token');
    this.authService.setUser(null);
  }

  ngOnInit() {
    const token = localStorage.getItem('token');

    if(token) {
      this.authService.verifyToken(token).subscribe((value: any) => {
        this.authService.setUser({
          email: value.users[0].email
        });
      });
    }

    this.authService.currentUser.subscribe(value => {
      if (value !== null) {
        this.email = value.email;
      } else {
        this.email = '';
      }
    });

    this.todoService.contador
      .pipe(
        map(x => x * 2),
        debounceTime(2000)
      )
      .subscribe(value => {
        this.contador = value;
      });
  }

}
