import { Component, OnInit, Input } from '@angular/core';
import {SwapiService} from "../../models/swapi.service";
import {BehaviorSubject, Subject} from "rxjs";
import {Pilot, Starship} from "../../models/starship";
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {
  public starship: Starship;
  public name: string;
  public crew: Starship;
  public pilots: Pilot[];
  private index;



  constructor(private swapi: SwapiService,
              private route: ActivatedRoute) {
    this.name = this.route.snapshot.paramMap.get('name');
     }


  loadStarship(): void {
    this.swapi.getStarshipList().subscribe(
      res => {
        this.starship = JSON.parse(JSON.stringify(res));
        // this.starship=res[0];
        this.swapi.setData(res)
        console.log(this.index);
        console.log(this.crew);
        console.log(this.name);
        console.log(res);

      }
    )
  }

  ngOnInit(){
    this.loadStarship();

  }


}
