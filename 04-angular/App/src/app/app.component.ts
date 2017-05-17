import { Component } from '@angular/core';

@Component({
  selector: 'raiz',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Hello world!';
  name = 'Cristhian';
  lastname = 'Motoche';

  constructor(){
    console.log("Hello!");
    this.holaMundo();
    console.log(this.greet("Cristhian"));
  }

  holaMundo(){
    console.log("Hello world!");
  }

  greet(name:string, lastname?: string): string {
    return `Hello ${name} ${lastname}`;
  }
}

interface UserInterface {
  name: string,
  lastname: string
}
