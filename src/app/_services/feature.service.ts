import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:8000/apis';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor(
    private http: HttpClient,
  ) { }

  prescription(): Observable<any> {
    return this.http.get(apiUrl + '/prescription/', httpOptions).pipe(
      tap(_ => console.log('fetch prescription'))
    );
  }

  myUId(): Observable<any> {
    return this.http.get(apiUrl + '/my_uid/', httpOptions).pipe(
      tap(_ => console.log('check id'))
    );
  }

  uniqueId(uId: string ): Observable<any> {
    return this.http.get(apiUrl + '/prescription/?u_Id=' + uId, httpOptions).pipe(
      tap(_ => console.log('check id'))
    );
  }
}
