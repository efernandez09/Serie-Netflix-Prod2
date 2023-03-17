import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './components/player/player.component';

// importamos los componentes para añadirlo a las rutas
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'player', component: PlayerComponent},
{path: '**', pathMatch: 'full' ,redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
