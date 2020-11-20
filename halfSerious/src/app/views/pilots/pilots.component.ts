import {Component, Inject, OnInit} from '@angular/core';
import {Pilot, Starship} from "../../models/starship";
import {SwapiService} from "../../models/swapi.service";
import {ActivatedRoute} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.css']
})
export class PilotsComponent implements OnInit {
  // public starship: Starship[];
  public pilots: Starship;
  public name: string;

  constructor(public dialogRef: MatDialogRef<Starship>,
              @Inject(MAT_DIALOG_DATA) data,
              private swapi: SwapiService,
              ) {
    console.log(data);
    // console.log(this.pilots);
  }

  ngOnInit(): void {

    // this.swapi.apiData.subscribe(data => {
    //   console.log('data on pilots', data);
    //   this.pilots = data.find(starship => starship.name == this.name);
    //   // console.log(this.pilots);
    // })

  }

  closeDialog(): void {
    setTimeout(() => {
      this.dialogRef.close();
    }, 2000);

  }

}
