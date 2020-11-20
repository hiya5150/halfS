import { Component, OnInit } from '@angular/core';
import construct = Reflect.construct;
import {HttpClient} from "@angular/common/http";
import {SwapiService} from "./models/swapi.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'halfSerious';


constructor(private swapi: SwapiService) { }

  ngOnInit(): void {
  this.swapi.getStarshipList();
}

}
