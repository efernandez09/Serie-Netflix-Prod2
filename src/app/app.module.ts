import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/** 
 * Importamos los modulos de los componentes y de las páginas del sitio para poder
 * utilizarlos en el componente principal. (Los añadimos en la sección de "imports" en el NgModule)
 */ 

// Componentes
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';

// Modulos de Angular
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule,
    PagesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
