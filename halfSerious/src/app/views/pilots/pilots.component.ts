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
  public pilots: Pilot[];
  public name: string;

  constructor(public dialogRef: MatDialogRef<Starship>,
              @Inject(MAT_DIALOG_DATA) public data:any) {
    // console.log(data);
    this.pilots = data.pilots;
    console.log(this.pilots);
  }

  ngOnInit(): void {

  }

  closeDialog(): void {
    setTimeout(() => {
      this.dialogRef.close();
    }, 2000);

  }

}
