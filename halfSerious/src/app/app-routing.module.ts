import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StarshipsComponent} from "./views/starships/starships.component";
import {StarshipComponent} from "./views/starship/starship.component";
import {PilotsComponent} from "./views/pilots/pilots.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', component: StarshipsComponent},
  {path: 'starships', component: StarshipsComponent},
  {path: 'starship/:name', component: StarshipComponent},
  {path: 'pilots', component: PilotsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
