
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { People } from '../interfaces/people';

@Injectable()
export class PeopleService  {

  private url = '../../assets/data/people.json' ;
  public storage: any;
  constructor(private httpClient: HttpClient) { }

  getPeople(): Observable<People[]> {
    return this.httpClient.get<People[]>(this.url);

  }
}
