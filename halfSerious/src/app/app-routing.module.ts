import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StarshipsComponent} from "./views/starships/starships.component";
import {StarshipComponent} from "./views/starship/starship.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', component: StarshipsComponent},
  {path: 'starships', component: StarshipsComponent},
  {path: 'starships/:url', component: StarshipComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
