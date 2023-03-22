import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Actors, ActorsDetails } from 'src/app/models/actors.inteface';
import { ActorService } from 'src/app/actor.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  actor: Actors;
  constructor(
    private route: ActivatedRoute,
    private actorService: ActorService,
    private location: Location
  ){}
  
  ngOnInit(): void {
    this.getActor();
  }

  getActor(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.actorService.getActor(+id!).subscribe(Actors => this.actor = Actors);
  }


}
