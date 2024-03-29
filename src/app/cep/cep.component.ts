import { Component, OnInit } from '@angular/core';
import { CepService } from '../cep.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

  cep: any = {};

  constructor(private cepService: CepService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.cepService.getCep(params.numero).subscribe(value => {
        this.cep = value;
      });
    });
  }

}
