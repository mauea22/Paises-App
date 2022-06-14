import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent  {
  regiones: string[] = ['americas','africa','europe','asia','oceania',];
  regionActiva: string = '';
  regionesFull: Country[]= [];

  constructor( private paisService: PaisService) { }

  activarRegion( region:string){
    //si la lista que se muestra es la misma que estoy seleccionando que no haga nada ya que es la misma que se ve en pantalla
    if (region === this.regionActiva) {
      return;
    }

    this.regionActiva = region;
    
    this.regionesFull = [];

    this.paisService.buscarRegion(region).subscribe(resp =>{
        this.regionesFull = resp
        console.log(resp)
      })
    }
  }






