import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {map, skipWhile, tap} from 'rxjs/operators';
import {Starship} from "./starship";


@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  public apiData = new BehaviorSubject<Starship[]>(null)
  baseURL = 'https://swapi.dev/api/';
  public starships = [];

  constructor(private http: HttpClient) { }

  getStarshipList(page?): void {
    if (!page) {
      page = 1;
    }
    this.http.get<Starship[]>(`${this.baseURL}starships?page=${page}`).toPromise().then(
      res => {
        this.starships = this.starships.concat(res['results']);
        console.log(this.starships)
        this.setData(this.starships);
        if (res['next'] !== null) {
          this.getStarshipList(++page);
        }
      }
    )
  }
  // getStarshipList(page?): void {
  //   if (!page) {
  //     page = 1;
  //   }
  //   this.http.get<Starship[]>(`${this.baseURL}starships?page=${page}`).toPromise().then(
  //     res => {
  //       this.starships = res;
  //       console.log(this.starships)
  //       this.setData(this.starships);
  //       if (res['next'] !== null) {
  //         this.getStarshipList(++page);
  //       }
  //     }
  //   )
  // }



  // getByPage(page: number): string {
  //   if (page) { return '&page=' + page; }
  //   else { return ''; };
  //     }
//
//   goToNextPage(page: number): string {
//       while (this.next!=null) {
//         return '&page=2'
//       }
// }

  // getStarshipList(): Observable<Starship[]> {
  //   return this.http.get<Starship[]>(`${this.baseURL}starships/`)
  // }

  setData(data) {
    this.apiData.next(data)
    }



}

