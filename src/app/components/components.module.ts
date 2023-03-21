import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Importamos los componentes
import { ActorsComponent } from './actors/actors.component';
import { DetailComponent } from './detail/detail.component';

// Modulo de los componentes.

@NgModule({
  declarations: [
    ActorsComponent,
    DetailComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    ActorsComponent
  ]
})
export class ComponentsModule { }
