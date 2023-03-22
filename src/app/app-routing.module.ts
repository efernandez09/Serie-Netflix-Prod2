import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';

// importamos los componentes para añadirlo a las rutas
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'detail/:id', component:DetailComponent},
{path: '**', pathMatch: 'full' ,redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
