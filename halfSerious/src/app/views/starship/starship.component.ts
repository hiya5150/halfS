import { Component, OnInit, Input } from '@angular/core';
import {SwapiService} from "../../models/swapi.service";
import {BehaviorSubject, Subject} from "rxjs";
import {Starship} from "../../models/starship";
import {MatTableDataSource} from "@angular/material/table";


@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {
  public starship: Starship[];

  // @Input() data: Starship[];
  // @Input()datasource
  private data;

  constructor(private swapi: SwapiService) {
    // this.swapi.setData(res)
    // swapi.currentData.subscribe((data => this.data = data))
    // console.log(this.data);
  }

  loadStarship(): void {
    this.swapi.getStarshipList().subscribe(
      res => {
        this.starship = res;
        this.swapi.setData(res)
        console.log(res);
        // this.dataSource = new MatTableDataSource(res);
        // this.dataSource.paginator = this.paginator;
        // console.log(this.dataSource);
        // console.log(this.starship)
      }
    )
  }

  ngOnInit(){
    this.loadStarship();
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
