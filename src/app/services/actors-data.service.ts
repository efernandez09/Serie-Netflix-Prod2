import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';


import { Actors } from '../models/actors.inteface';


@Injectable({
  providedIn: 'root'
})

export class ActorsDataService {

  // Declaramos la URL en la que se encuentra toda la información
  actorsDataUrl: string = '../../assets/actorsData/actorsData.json';

  // En el constructor inicializamos el servicio "HttpClient"
  constructor(public http:HttpClient) { 
      console.log("Actors data service is available")
  }

  // Declaramos el método con un observable que devuelve todos los datos del array de Actores
  // a los componentes que se suscriban a el (también añadimos control de errores). 
  getActors(): Observable<any> {
    return this.http.get<Actors[]>(this.actorsDataUrl)
      .pipe(
        catchError(error => {
          console.log('Error loading actors', error);
          return error;
        })
      );
  }
  



}
