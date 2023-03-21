import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Importamos los tipados que ya hemos creado previamente
import { Actors } from '../../models/actors.inteface'

// Importamos los servicios
import { ActorsDataService } from '../../services/actors-data.service'


@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})

export class ActorsComponent {
  
  // Declaramos el array al cual le asignaremos el tipado que hemos creado en el modelo, y 
  // lo rellenaremos con la información del servicio que contiene los datos, en este caso solo necesitaremos 6.
  actorsArray: Actors[] = [];
  
  constructor(private router: Router, public actorsData: ActorsDataService ) {}

  // Añadimos que al inicializar el componente se suscriba al observable almacenado en
  // el servicio de "ActorsDataService". y pase toda la información al arraylist que tenemos
  // declarado en la parte superior de la clase.
  ngOnInit() {
    this.actorsData.getActors().subscribe(data => {
      this.actorsArray = data;
      console.log(data)
    })
  }

  // <-- Pablo --> 
  navegar() {
    this.router.navigate(['player']);
  }


}
