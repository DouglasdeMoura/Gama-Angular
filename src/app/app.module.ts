import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { HomeComponent } from './home/home.component';
import { ContadorBotoesComponent } from './contador-botoes/contador-botoes.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todo', loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule) },
  { path: 'cep', loadChildren: () => import('./cep/cep.module').then(m => m.CepModule) },
];

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    HomeComponent,
    ContadorBotoesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
