import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Actors } from 'src/app/models/actors.inteface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  actor: Actors;

  constructor(
    private route: ActivatedRoute, //Para extraer el id de la ruta que ha creado el componente
    // private actorService: ActorService, //Para mostrar el actor
    private location: Location //Servicio para interactuar con el navegador y volver hacia a atrás
  ){}
  
  ngOnInit(): void {
    this.getActor();
  }

  /*Método para obtener el id del actor y acceder a su detalle*/
  getActor(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    // this.actorService.getActor(+id!).subscribe(Actors => this.actor = Actors);
  }

  /*Función para volver al componente actors*/
  goBack():void {
    this.location.back();
  }

}
