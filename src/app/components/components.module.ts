import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Importamos los componentes
import { ActorsComponent } from './actors/actors.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'detail/:id', component: DetailComponent}
  ];
  

// Modulo de los componentes.

@NgModule({
  declarations: [
    ActorsComponent,
    DetailComponent
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild(routes)
  ],
  exports: [
    ActorsComponent,DetailComponent 
  ]
})
export class ComponentsModule { }
