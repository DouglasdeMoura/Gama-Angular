import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/typings/Todo';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-lista-todos',
  templateUrl: './lista-todos.component.html',
  styleUrls: ['./lista-todos.component.css']
})
export class ListaTodosComponent implements OnInit {

  todos$: Observable<Todo[]>;
  // Todo Observable deve ter um cifrão no final

  constructor(private todoService: TodoService, private authService: AuthService) { }

  ngOnInit() {
    this.authService.currentUser.subscribe(user => {
      console.log(user);
      this.todos$ = this.todoService.getTodos(user.id);
    });
  }

}
