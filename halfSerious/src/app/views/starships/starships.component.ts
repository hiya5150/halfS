import { Component, OnInit, ViewChild } from '@angular/core';
import {SwapiService} from "../../models/swapi.service";
import {Starship} from "../../models/starship";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {BehaviorSubject} from "rxjs";
// import {MatCardModule} from "@angular/material/card";



@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {
  public starships: Starship[];
  expandedElement: Starship | null;
  public dataSource: MatTableDataSource<Starship>
  displaySWColumns: string[] = ['name', 'MGLT', 'model', 'crew', 'length','StarWarsDetails'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor(private swapi: SwapiService) {
  // this.dataSource.data=[];
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(){
    this.swapi.apiData.subscribe(data => {
      console.log("Got Data: ", data);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;

    })
}


}
