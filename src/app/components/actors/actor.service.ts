import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Actors } from '../../models/actors.inteface';
import { ACTORS } from './actorList';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor() { }

  /* Creamos un método para devolver los actores. Utilizamos Observable para tener una asynchronous signature.
  Observable<> devuelve solo un valor, la matriz de actores*/
  getActors(): Observable<Actors[]> {
    return of (ACTORS);
  }

  /*Método para obtener el id del actor y poder acceder al detalle*/
  getActor(id: number): Observable<Actors> {
    return of(ACTORS.find(actors => actors.id === id)!);
  }
}
