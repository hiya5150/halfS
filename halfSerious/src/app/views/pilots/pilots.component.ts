import { Component, OnInit } from '@angular/core';
import {Pilot, Starship} from "../../models/starship";
import {SwapiService} from "../../models/swapi.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.css']
})
export class PilotsComponent implements OnInit {
  public starship: Starship[];
  public pilots: Starship;
  public name: string;

  constructor(private swapi: SwapiService,
              private route: ActivatedRoute) {
    this.name = this.route.snapshot.paramMap.get('name');
  }

  ngOnInit(): void {

    this.swapi.apiData.subscribe(data => {
      console.log('subscribed data', data);
      this.pilots = data.find(starship => starship.name == this.name);
      console.log(this.pilots);
    })

  }

}
