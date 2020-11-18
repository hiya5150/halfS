import { Component, OnInit, ViewChild } from '@angular/core';
import {SwapiService} from "../../models/swapi.service";
import {Starship} from "../../models/starship";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {BehaviorSubject} from "rxjs";


@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {
  public starship: Starship[];
  expandedElement: Starship | null;
  public dataSource: MatTableDataSource<Starship>
  displaySWColumns: string[] = ['name', 'MGLT', 'model', 'crew', 'length','StarWarsDetails'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  // shareData: BehaviorSubject<any> = new BehaviorSubject({});

  constructor(private swapi: SwapiService) { }

  ngOnInit(): void {
    this.loadStarshipList();

  }

  loadStarshipList(): void {
    this.swapi.getStarshipList().subscribe(
      res => {
        this.starship = res;
        this.swapi.setData(res)
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;

      }
               )
  }

}
