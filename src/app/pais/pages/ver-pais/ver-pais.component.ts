import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private paisService: PaisService
) { }

  ngOnInit(): void {

    /* this.activateRoute.params
    .pipe(
      switchMap((param) => this.paisService.getPaisPorAlpha(param["id"])),
      tap(console.log)
    )
    .subscribe( resp => this.pais = resp); */


    //de la ruta url activa me suscribo a los parametros (id) y obtengo el mismo
    this.activateRoute.params.subscribe(({id}) =>{
      console.log(id)

      // con el id del paso anterior lo paso como parametro para disparar el método getPaisAlpha() que es un nuevo observable al cual me suscribo para obtener los datos del pais
      this.paisService.getPaisPorAlpha( id ).subscribe( pais =>{
        console.log(pais)
        this.pais = pais;
      });
    });

  }
}
