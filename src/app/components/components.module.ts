import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// Importamos los componentes
import { ActorsComponent } from './actors/actors.component';
import { PlayerComponent } from './player/player.component';
import { DetailComponent } from './detail/detail.component';
import { AddActorComponent } from './add-actor/add-actor.component';

// Pipes --> Importante declararlo tanto en el campo "Declarations" como en el "Exports", para que todos los componentes
// Que incluyan este componente púedan utilizarlo y no cause errores.
import { FilterActorsByNamePipe } from '../pipes/FilterActorsByName/filter-actors-by-name.pipe'
import { FilterActorsByDescriptionPipe } from '../pipes/FilterActorsByDescription/filter-actors-by-description.pipe';

import { RouterModule, Routes } from '@angular/router';
import { FinderComponent } from './finder/finder.component';

/* Necesitamos importar RouterModule y Routes para poder utilizar el enrutamiento dentro del componente Actor */
const routes: Routes = [
  {path: 'detail/:id', component: DetailComponent}
  ];
  

// Modulo de los componentes.

@NgModule({
  declarations: [
    ActorsComponent,
    PlayerComponent,
    FilterActorsByNamePipe,
    FilterActorsByDescriptionPipe,
    DetailComponent,
    FinderComponent,
    AddActorComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ActorsComponent,
    PlayerComponent,
    FilterActorsByNamePipe,
    DetailComponent
  ],
})
export class ComponentsModule { }
