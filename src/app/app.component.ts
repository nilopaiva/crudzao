import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crudzao';

  constructor(){
    if(!localStorage.getItem("list"))
      localStorage.setItem('list', '{"tasks":[{"title":"oi", "description":"uma maneira de falar bom dia rápido"}]}')
  }
}
