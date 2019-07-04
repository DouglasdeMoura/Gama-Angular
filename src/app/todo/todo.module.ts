import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ListaTodosComponent } from './lista-todos/lista-todos.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BoolPipe } from './bool.pipe';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ListaTodosComponent },
  { path: 'add', component: AddTodoComponent }
];


@NgModule({
  declarations: [
    TodoItemComponent,
    ListaTodosComponent,
    AddTodoComponent,
    BoolPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class TodoModule { }
