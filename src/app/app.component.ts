import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Douglas';
  items = ['2', '3', '5', '8', '9'];

  ngOnInit() {
    setTimeout(() => {
      this.title += ' Moura';
    }, 2000);
  }

  novoItem() {
    const text = prompt('Digite um nome');
    this.items.push(text);
  }

}
