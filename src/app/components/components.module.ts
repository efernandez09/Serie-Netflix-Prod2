import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importamos los componentes
import { ActorsComponent } from './actors/actors.component';

// Modulo de los componentes.

@NgModule({
  declarations: [
    ActorsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ActorsComponent
  ]
})
export class ComponentsModule { }
