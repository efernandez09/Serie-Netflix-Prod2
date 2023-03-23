import { Pipe, PipeTransform } from '@angular/core';
import { Actors } from '../models/actors.inteface';

@Pipe({
  name: 'filterActorsByName'
})

export class FilterActorsByNamePipe implements PipeTransform {

  // Mediante el método transform creamos el pipe.
  transform(actors: Actors[], searchText: string): any {
    if (!actors || !searchText) {
      return actors;
    }
  
    searchText = searchText.toLowerCase();
  
    return actors.filter(actor =>
      actor.name.toLowerCase().includes(searchText)
    );
  }

}
