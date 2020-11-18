import { Component, OnInit, Input } from '@angular/core';
import {SwapiService} from "../../models/swapi.service";
import {BehaviorSubject, Subject} from "rxjs";
import {Starship} from "../../models/starship";
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {
  public starship: Starship[];
  public name: string;
  private model: string;
  // private data;
  // @Input() data: Starship[];
  // @Input()datasource


  constructor(private swapi: SwapiService,
              private route: ActivatedRoute) {
    this.name = this.route.snapshot.paramMap.get('name');
    // this.swapi.setData(res)
    // swapi.currentData.subscribe((data => this.data = data))
    // console.log(this.data);
  }



  // loadStarship(): void {
  //   this.swapi.getStarshipList().subscribe(
  //     res => {
  //       this.starship = res;
  //       this.swapi.setData(res)
  //       console.log(res);
  //       console.log();
  //       // this.dataSource = new MatTableDataSource(res);
  //       // this.dataSource.paginator = this.paginator;
  //       // console.log(this.dataSource);
  //       // console.log(this.starship)
  //     }
  //   )
  // }
  loadStarship(name): void {
    this.swapi.getStarshipList(name).subscribe(
      res => {
        this.starship = res;
        this.swapi.setData(res)
        console.log(this.starship[0]);
        console.log(this.name);
        // console.log(this.model);
        // console.log(this.starship)
        // this.dataSource = new MatTableDataSource(res);
        // this.dataSource.paginator = this.paginator;
        // console.log(this.dataSource);
        // console.log(this.starship)
      }
    )
  }



  ngOnInit(){
    this.loadStarship(name);
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
