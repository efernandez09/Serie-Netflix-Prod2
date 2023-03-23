import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importamos los componentes para añadirlo a las rutas
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { PlayerComponent } from './components/player/player.component';

const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'player', component: PlayerComponent},
{path: 'detail/:id', component:DetailComponent},
{path: '**', pathMatch: 'full' ,redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled' 
   })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
