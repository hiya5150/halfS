import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {map, skipWhile, tap} from 'rxjs/operators';
import {Starship} from "./starship";


@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  private apiData = new BehaviorSubject<Starship[]>(null)

  baseURL = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  getStarshipList(page?: any): Observable<Starship[]> {
    return this.http.get<Starship[]>(`${this.baseURL}starships?format=json${this.getByPage(page)}`)
      .pipe(
        map(resp => resp['results']),)
    ;
  }

  getByPage(page: number): string {
    if (page) { return '&page=' + page; } else { return ''; }
  }

  setData(data) {
    this.apiData.next(data)
    }



}

