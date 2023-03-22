import { Component, OnInit } from '@angular/core';

// Importamos los tipados que ya hemos creado previamente
import { ActorService } from 'src/app/components/actors/actor.service';
import { ACTORS } from './actorList';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})

export class ActorsComponent implements OnInit{

  //Utilizamos el array con los datos que hemos importado
  actor = ACTORS;

  /*Definimos la propiedad para identificarla como la inyección del servicio */
  constructor(private actorService: ActorService){}

  /* Llamamos aquí al método getActors() para una mejor práctica */
  ngOnInit() {
    this.getActors();
  }

  /* Creamos el método para recuperar los actores del servicio. Tenemos que usar la funcion subscribe 
  porque hemos utilizado Observable<>*/
  getActors(): void {
    this.actorService.getActors().subscribe(actors => this.actor = actors);
  }

}
