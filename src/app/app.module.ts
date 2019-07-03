import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ContadorComponent } from './contador/contador.component';
import { ListaTodosComponent } from './lista-todos/lista-todos.component';
import { HomeComponent } from './home/home.component';
import { ContadorBotoesComponent } from './contador-botoes/contador-botoes.component';
import { CepComponent } from './cep/cep.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CepTextComponent } from './cep-text/cep-text.component';
import { FormsModule } from '@angular/forms';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { BoolPipe } from './bool.pipe';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todos', component: ListaTodosComponent },
  { path: 'cep', component: CepTextComponent },
  { path: 'cep/:numero', component: CepComponent },
  { path: 'todo/add', component: AddTodoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    ContadorComponent,
    ListaTodosComponent,
    HomeComponent,
    ContadorBotoesComponent,
    CepComponent,
    CepTextComponent,
    AddTodoComponent,
    BoolPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
