import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// Firestore 
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Actors } from 'src/app/models/actors.inteface';

@Injectable({
  providedIn: 'root'
})
export class HandleActorsService {

  constructor(private firestore: Firestore) { }

  addActor(actor: Actors){
    // Referencia a la coleccion donde se almacenan los actores.
    const ActorRef = collection(this.firestore, 'actors');
    return addDoc(ActorRef, actor);
  }

  // Metodo para mostrar todos los actores de la coleccion 'Actors'
  // En la base de datos de firestore.
  getActors(): Observable<Actors[]>{
    const ActorRef = collection(this.firestore, 'actors');
    return collectionData(ActorRef, {idField: 'id'}) as Observable<Actors[]>;
  }

  deleteActor(actor: Actors) {
    const ActorDocRef = doc(this.firestore, `actors/${actor.id}`);
    return deleteDoc(ActorDocRef);
  }



}
