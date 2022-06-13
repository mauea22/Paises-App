import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  //Se emite cuando la persona presiona enter
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  //se va a emitir cuando la persona deja de escribir
  @Output( ) onDebounce: EventEmitter<string> = new EventEmitter();

  //Subjet es un observable, puedo suscribirme a los valores que emite
  debouncer: Subject<string> = new Subject();
  termino: string = '';

  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe( valor => {
      this.onDebounce.emit(valor)
    });
  }

  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada( ){
    this.debouncer.next( this.termino)
  }

}
