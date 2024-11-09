import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private apiUrl = 'https://restcountries.com';
  private apiVersion = 'v3.1';

  constructor(private http: HttpClient) {}

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/${this.apiVersion}/capital/${term}`;
    //return this.http.get<Country[]>(url);
    // return this.http.get<Country[]>(url).pipe(
    //   tap((countries) => console.log('countries 1 :>> ', countries)),
    //   map((countries) => []),
    //   tap((countries) => console.log('countries 2 :>> ', countries))
    // );

    return this.http.get<Country[]>(url).pipe(
      catchError((error) => {
        console.log('error capturado :>> ', error);
        return of([]);
      })
    );
  }
}
