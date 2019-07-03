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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todos', component: ListaTodosComponent },
  { path: 'cep/:numero', component: CepComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    ContadorComponent,
    ListaTodosComponent,
    HomeComponent,
    ContadorBotoesComponent,
    CepComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
