import { Component, ViewChild, ElementRef } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Firestore, doc, getDoc } from 'firebase/firestore';
import { HandleActorsService } from 'src/app/services/handleActors/handle-actors.service';
import { Observable, map, switchMap } from 'rxjs';
import { getStorage, getDownloadURL, listAll, ref } from 'firebase/storage';



import { Actors } from 'src/app/models/actors.inteface';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
//actor: Actors;
actor$: Observable<Actors>;
actor: Actors[];
a: Actors;
images: Array<string> = [];
videos : Array<string> = [];

constructor(
  private route: ActivatedRoute, //Para extraer el id de la ruta que ha creado el componente
  private location: Location, //Servicio para interactuar con el navegador y volver hacia a atrás
  private _actorService: HandleActorsService //Servicio donde se incluyen los métodos para interactuar con la bbdd  
){}

ngOnInit(): void {
  const idActor = this.route.snapshot.paramMap.get('id')
  
  this._actorService.getOneActor(idActor).subscribe(actors => { 
    console.log("Este es mi : ", actors);
    this.a = actors});
}


goBack():void {
  this.location.back();
}


  name = "Angular";
  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
  isPlay: boolean = false;
  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }
  playPause() {
    var myVideo: any = document.getElementById("my_video_1");
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  }

  makeBig() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 560;
  }

  makeSmall() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 320;
  }

  makeNormal() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 420;
  }

  restart() {
    let myVideo: any = document.getElementById("my_video_1");
    myVideo.currentTime = 0;
  }

}
