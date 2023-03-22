import { Component, Input } from '@angular/core';
import { Actors, ActorsDetails } from 'src/app/models/actors.inteface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() actors?: Actors;
  @Input() actorsDetail?: ActorsDetails;
}
