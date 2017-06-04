import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  planets:Planet[] = []

  constructor(private _http: Http) {
  }

  loadPlanets() {
    this._http
      .get("http://swapi.co/api/planets")
      .subscribe(
        (planets) => {
          this.planets = planets.json().results;
        },
        (res) => { alert(res) },
        () => {}
      )
  }
}

interface Planet {
  name: string,
    rotation_period: number,
    orbital_period: number,
    diameter: number,
    climate: string,
    gravity: string,
    terrain: string,
    surface_water: number,
    population: number
}
