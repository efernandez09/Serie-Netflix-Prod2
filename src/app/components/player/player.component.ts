import { Component, ViewChild, ElementRef } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Actors } from 'src/app/models/actors.inteface';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
actor: Actors;

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
    let video: any = document.getElementById("my_video_1");
    video.currentTime = 0;
  }

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
    const id = this.route.snapshot.paramMap.get('id');
    // this.actorService.getActor(+id!).subscribe(Actors => this.actor = Actors);
  }
}
