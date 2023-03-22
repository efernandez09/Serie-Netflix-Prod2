import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Actors } from './models/actors.inteface';
import { ACTORS } from './components/actors/actorList';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor() { }

  getActors(): Observable<Actors[]> {
    return of (ACTORS);
  }

  getActor(id: number): Observable<Actors> {
    return of(ACTORS.find(actors => actors.id === id)!);
  }
}
