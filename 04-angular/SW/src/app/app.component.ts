import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { User } from "app/Classes/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users:User[] = []

  constructor(private _http: Http) {
  }

  ngOnInit(){
    this.loadPlanets()
  }

  loadPlanets() {
    this._http
      .get("http://localhost:8000/usuario")
      .subscribe(
        (users) => {
          this.users = users.json();
        },
        (res) => { alert(res) },
        () => {}
      )
  }
}

