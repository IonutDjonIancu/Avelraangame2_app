import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css'],
})
export class AppMenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  getSwapi() {
    fetch('https://swapi.dev/api/people/1')
      .then((result) => result.json())
      .then((data) => console.log(data));
  }

  getOkay() {
    fetch('https://localhost:7017/api/palantir/GetOk')
      .then((result) => result.text())
      .then((data) => console.log(data));
  }
}
