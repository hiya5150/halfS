import { Component, OnInit, Input } from '@angular/core';
import {SwapiService} from "../../models/swapi.service";
import {Pilot, Starship} from "../../models/starship";
import {ActivatedRoute} from "@angular/router";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
// import {Location} from "@angular/common";


@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {
  public starship: Starship;
  public name: string;
  public pilots: Pilot[];
  public selectedStarship: Starship
  private dialog: MatDialog;


  constructor(private swapi: SwapiService,
              private route: ActivatedRoute) {
    this.name = this.route.snapshot.paramMap.get('name');
     }

    ngOnInit(){
    // this.loadStarship();
  this.swapi.apiData.subscribe(data => {
    console.log('subscribed data', data);
    this.selectedStarship = data.find(starship => starship.name == this.name);
    console.log(this.selectedStarship);
      })
  }


  // backClicked() {
  //   this.location.back();
  //   // console.log(this.location);
  // }


}
