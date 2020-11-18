import { Component, OnInit, Input } from '@angular/core';
import {SwapiService} from "../../models/swapi.service";
import {BehaviorSubject, Subject} from "rxjs";
import {Starship} from "../../models/starship";


@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {
  @Input() data: Starship[];
  // private data;

  constructor(private swapi: SwapiService) {
    swapi.currentData.subscribe((data => this.data = data))
    console.log(this.data);
  }

  ngOnInit(){
    // this.swapi.getSlist().subscribe(
    //   res => {
    //     this.data = res;
    //   }
    // )
    // this.listenParentDataChanges();
  }
  // listenParentDataChanges() {
  //   if (this.data) {
  //     this.data.asObservable().subscribe(responseData => {
  //         console.log(this.data);
  //       });
  //   }
  // }


}
