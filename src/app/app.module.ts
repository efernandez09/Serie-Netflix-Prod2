import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/** 
 * Importamos los modulos de los componentes y de las páginas del sitio para poder
 * utilizarlos en el componente principal. (Los añadimos en la sección de "imports" en el NgModule)
 */ 
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { PlayerComponent } from './components/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
