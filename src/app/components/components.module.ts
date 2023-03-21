import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Importamos los componentes
import { ActorsComponent } from './actors/actors.component';
import { PlayerComponent } from './player/player.component';

// Pipes --> Importante declararlo tanto en el campo "Declarations" como en el "Exports", para que todos los componentes
// Que incluyan este componente púedan utilizarlo y no cause errores.
import { FilterActorsByNamePipe } from '../pipes/filter-actors-by-name.pipe'


// Modulo de los componentes.

@NgModule({
  declarations: [
    ActorsComponent,
    PlayerComponent,
    FilterActorsByNamePipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ActorsComponent,
    PlayerComponent,
    FilterActorsByNamePipe
  ]
})
export class ComponentsModule { }
