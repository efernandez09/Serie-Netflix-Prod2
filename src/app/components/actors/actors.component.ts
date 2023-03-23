import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


// Importamos los tipados que ya hemos creado previamente
import { ActorService } from '../../services/ActorService/actor.service';
import { ACTORS } from './actorList';

// Importamos los servicios
import { ActorsDataService } from '../../services/ActorsData/actors-data.service'

// Pipe
import { FilterActorsByNamePipe } from '../../pipes/FilterActorsByName/filter-actors-by-name.pipe'


@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})

/*comprobar




*/
 

export class ActorsComponent implements OnInit{
  // Declaramos el array al cual le asignaremos el tipado que hemos creado en el modelo, y 
  // lo rellenaremos con la información del servicio que contiene los datos, en este caso solo necesitaremos 6.
  //actorsArray: Actors[] = [];
  // Declaramos el elemnto en el cual se alamacenara el valor del input de búsqueda por autor.
  searchText: string = '';
  //Utilizamos el array con los datos que hemos importado
  actor = ACTORS;

  /*Definimos la propiedad para identificarla como la inyección del servicio */
  constructor(private actorService: ActorService, private router: Router, public actorsData: ActorsDataService ){}

  /* Llamamos aquí al método getActors() para una mejor práctica */
    // Añadimos que al inicializar el componente se suscriba al observable almacenado en
  // el servicio de "ActorsDataService". y pase toda la información al arraylist que tenemos
  // declarado en la parte superior de la clase.
  ngOnInit() {
    this.getActors();
    
    /* this.actorsData.getActors().subscribe(data => {
      this.actorsArray = data;
      console.log(data))}*/
  }

  /* Creamos el método para recuperar los actores del servicio. Tenemos que usar la funcion subscribe 
  porque hemos utilizado Observable<>*/
  getActors(): void {
    this.actorService.getActors().subscribe(actors => this.actor = actors);
  }

  // <-- Pablo --> 
  navegar() {
    this.router.navigate(['player']);
  }
}
