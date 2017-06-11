import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';

import { User } from "app/Classes/User";

@Component({
  selector: 'app-sw-planet',
  templateUrl: './sw-planet.component.html',
  styleUrls: ['./sw-planet.component.css']
})
export class SwPlanetComponent implements OnInit {
  @Input() user:User

  constructor(private _http: Http) { }

  newUser:User = new User();

  createUser(){
    console.log(this.newUser);

    this._http
      .post("http://localhost:8000/usuario", this.newUser)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => { console.log(error); },
        () => {}
      )
  }

  ngOnInit() {
  }
}

