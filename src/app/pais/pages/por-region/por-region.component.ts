import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent  {

  termino: string = '';
  hayError:boolean= false;
  paises: Country[] = [];

  constructor( private paisService: PaisService) { }


  buscar( termino:string){
    this.hayError = false;

    this.paisService.buscarRegion(termino).subscribe((resp) =>{
      this.paises = resp;
      //ahora en paises tengo los datos en el formato Country[] definido en pais.interface
      //puedo consumir estos datos desde el HTML y llenar la tabla con sus respectivos campos
    },(err) => {
      this.hayError = true;
      console.log(err);
      this.paises = [];
    });

    //reseteo el input
    this.termino = '';
  }

  sugerencias(){
    this.hayError = false;
    //TODO: crear sugerencia
  }
}
