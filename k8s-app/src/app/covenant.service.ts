import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Covenant } from  './covenant';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/text' })
};


@Injectable({
  providedIn: 'root'
})
export class CovenantService {

  private testURL = 'assets/config/env1.txt'
  constructor(private http: HttpClient) { }

  // getEnvInfo():Observable<string>{
  //   return this.http.get<string>(this.testURL)
  //   .pipe(
  //     tap(_ => console.log('fetched environment variable'))
  //   );
  // }


  getEnvInfo():any{
    return this.http.get(this.testURL,{responseType:'text'})
    // return this.http.get<any>(this.testURL);
  }

}
