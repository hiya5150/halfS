import { Component, OnInit, Input } from '@angular/core';
import {SwapiService} from "../../models/swapi.service";
import {Pilot, Starship} from "../../models/starship";
import {ActivatedRoute} from "@angular/router";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {PilotsComponent} from "../pilots/pilots.component";
// import {Location} from "@angular/common";


@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {
  // public starship: Starship;
  public name: string;
  public pilots: Pilot[];
  public selectedStarship: Starship
  private dialog: MatDialog;
  private openPilotVariable = {display: 'none'};
  showButton = {display: 'inline-block'};




  constructor(private swapi: SwapiService,
              private route: ActivatedRoute) {
    this.name = this.route.snapshot.paramMap.get('name');
     }

    ngOnInit(){
    // this.loadStarship();
  this.swapi.apiData.subscribe(data => {
    console.log('subscribed data', data);
    this.selectedStarship = data.find(starship => starship.name == this.name);
    // console.log(this.selectedStarship);
    console.log(this.selectedStarship.pilots);

  })
  }

  openPilots(): void {
    this.openPilotVariable.display = 'block';
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '600px';
    dialogConfig.data = this.selectedStarship.pilots;
    // dialogConfig.data = {
    //   starship: this.selectedStarship,
    // };
    // console.log(this.selectedStarship.pilots);

    this.dialog.open(PilotsComponent, dialogConfig);

  }


  // backClicked() {
  //   this.location.back();
  //   // console.log(this.location);
  // }


}
