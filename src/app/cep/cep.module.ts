import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CepComponent } from './cep/cep.component';
import { CepTextComponent } from './cep-text/cep-text.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: CepTextComponent },
  { path: ':numero', component: CepComponent },
];

@NgModule({
  declarations: [
    CepComponent,
    CepTextComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class CepModule { }
