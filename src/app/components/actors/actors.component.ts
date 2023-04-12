import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Actors } from 'src/app/models/actors.inteface';


// Importamos los tipados que ya hemos creado previamente
// import { ActorService } from '../../services/ActorService/actor.service';
// import { ACTORS } from './actorList';

// Importamos los servicios
// import { ActorsDataService } from '../../services/ActorsData/actors-data.service'
import { HandleActorsService } from 'src/app/services/handleActors/handle-actors.service';

// Pipes
import { FilterActorsByNamePipe } from '../../pipes/FilterActorsByName/filter-actors-by-name.pipe'
import { FilterActorsByDescriptionPipe } from '../../pipes/FilterActorsByDescription/filter-actors-by-description.pipe';


@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})

 

export class ActorsComponent implements OnInit{

  searchText: string = '';
  opcion : string = '';
  
  // Arrat donde se alamacenaran todos los actores que esten persistiendo en la base de datos.
  actor: Actors[];

  /*Definimos la propiedad para identificarla como la inyección del servicio */
  constructor(private router: Router, private ActorsHandle: HandleActorsService){}

    /* Llamamos aquí al método getActors() para una mejor práctica */

  ngOnInit() {

      // Metodo para recuperar todos los datos de la base de datos.
      this.ActorsHandle.getActors().subscribe(actors => {
        console.log(actors);
        this.actor = actors;
      })
  }

  onTextSearch(mensaje:any) {
    this.searchText=mensaje.searchText;
    this.opcion = mensaje.option;
  // alert("Buscando la colección..." + this.opcion + this.searchText);
   }
   

  // <-- Pablo --> 
  navegar() {
    this.router.navigate(['player']);
  }
}
