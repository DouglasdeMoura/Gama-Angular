import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Todo } from 'src/typings/Todo';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  email = '';
  
  todo: Todo = {
    id: null,
    title: '',
    description: '',
    finished: false,
    date: '',
    userId: '',
  };

  constructor(private todoService: TodoService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.authService.currentUser.subscribe(user => {
      this.todo.userId = user.id;
    });
  }

  enviarTodo() {
    this.todoService
      .adicionarTodo(this.todo)
      .subscribe(() => {
        alert('To-do adicionado com sucesso');
        this.router.navigateByUrl('/todo');
      });
  }

}
