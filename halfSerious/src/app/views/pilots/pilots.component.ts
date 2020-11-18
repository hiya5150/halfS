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
  public pilots: Pilot[];
  public name: string;

  constructor(private swapi: SwapiService,
              private route: ActivatedRoute) {
    this.name = this.route.snapshot.paramMap.get('name');
  }
  loadStarship(): void {
    this.swapi.getStarshipList().subscribe(
      res => {
        this.starship = res;
        this.swapi.setData(res)
        // console.log(this.starship[0]);
        console.log(this.starship[0].name)
        this.pilots = this.starship[0].pilots;
        console.log(this.pilots);
        // console.log(this.name);
        this.starship = JSON.parse(JSON.stringify((res)))
        console.log(res);
      }
    )
  }

  ngOnInit(): void {
  }

}
