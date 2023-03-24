import { Pipe, PipeTransform } from '@angular/core';
import { Actors } from 'src/app/models/actors.inteface';

@Pipe({
  name: 'filterActorsByDescription'
})
export class FilterActorsByDescriptionPipe implements PipeTransform {

  transform(actors: Actors[], searchText: string): any {
    if (!actors || !searchText) {
      return actors;
    }
  
    searchText = searchText.toLowerCase();
  
    return actors.filter(actor =>
      actor.short_description.toLowerCase().includes(searchText)
    );
  }

}
