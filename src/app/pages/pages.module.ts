import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importamos los componentes en el modulo para poder exportarlos
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
  ]
})
export class PagesModule { }
