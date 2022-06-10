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
  }
}
