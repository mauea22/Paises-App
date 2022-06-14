import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  //getter para optimizar la petición a la API
  get httpParam(){
    return new HttpParams().set('fields','cca2,name,population,capital,flags')
  }

  constructor( private http: HttpClient) { }

  buscarPais( termino:string): Observable<Country[]>{
    //armo la url con apiUrl + /name / el pais que el usuario ingresa (termino) y la guardo en la variable url
    const url =`${this.apiUrl}/name/${termino}`;
    //retorna el observable de la url optimizada en el get httpParam
    return this.http.get<Country[]>(url,{params: this.httpParam});
  };

  buscarCapital( termino:string): Observable<Country[]>{
    const url =`${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url,{params: this.httpParam});
  };

  buscarRegion( region:string): Observable<Country[]>{
    const url =`${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url,{params: this.httpParam});
  };

  getPaisPorAlpha( id:string): Observable<any>{
    const url =`${this.apiUrl}/alpha/${id}`;
    return this.http.get<any>(url);
  };
}
