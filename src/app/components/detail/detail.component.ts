import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Actors } from 'src/app/models/actors.inteface';
import { Firestore, doc, getDoc } from 'firebase/firestore';
import { HandleActorsService } from 'src/app/services/handleActors/handle-actors.service';
import { Observable, map, switchMap } from 'rxjs';
import { getStorage, getDownloadURL, listAll, ref } from 'firebase/storage';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  actor: Actors[];
  a: Actors;
  images: Array<string> = [];
  

  constructor(
    private route: ActivatedRoute, //Para extraer el id de la ruta que ha creado el componente
    private location: Location, //Servicio para interactuar con el navegador y volver hacia a atrás
    private _actorService: HandleActorsService //Servicio donde se incluyen los métodos para interactuar con la bbdd  
  ){}
  
  ngOnInit(): void {
    //Recogemos id de la URl para acceder a ese actor en la base de datos
    const idActor = this.route.snapshot.paramMap.get('id');
    
    //Llamamos al método del servicio que devuelve un actor
    this._actorService.getOneActor(idActor).subscribe(actors => { 
      this.a = actors});
  }

  /*Función para volver al componente actors*/
  goBack():void {
    this.location.back();
  }

}
