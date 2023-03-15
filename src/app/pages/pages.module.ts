import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importamos los componentes en el modulo para poder exportarlos
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule, 
    ComponentsModule
  ],
  exports: [
    HomeComponent,
  ]
})
export class PagesModule { }
