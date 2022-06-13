import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient) { }

  buscarPais( termino:string): Observable<Country[]>{
    //armo la url con apiUrl + /name / el pais que el usuario ingresa (termino) y la guardo en la variable url
    const url =`${this.apiUrl}/name/${termino}`;

    //retorna el observable
    return this.http.get<Country[]>(url);
  };

  buscarCapital( termino:string): Observable<Country[]>{

    const url =`${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  };

  buscarRegion( termino:string): Observable<Country[]>{

    const url =`${this.apiUrl}/region/${termino}`;
    return this.http.get<Country[]>(url);
  };

  getPaisPorAlpha( id:string): Observable<Country>{

    const url =`${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  };
}
