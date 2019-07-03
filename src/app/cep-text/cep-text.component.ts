import { Component, OnInit } from '@angular/core';
import { CepService } from '../cep.service';

@Component({
  selector: 'app-cep-text',
  templateUrl: './cep-text.component.html',
  styleUrls: ['./cep-text.component.css']
})
export class CepTextComponent implements OnInit {

  cep: any = {};
  cepText = '';

  constructor(private cepService: CepService) { }

  ngOnInit() {
  }

  buscarCep() {
    this.cepService.getCep(this.cepText)
      .subscribe(value => {
        this.cep = value;
      });
  }

}
