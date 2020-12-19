import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { EditmovieComponent } from './editmovie/editmovie.component';
import { MovielistComponent } from './movielist/movielist.component';
import { ViewmovieComponent } from './viewmovie/viewmovie.component';

const routes: Routes = [
  {path:'', component:MovielistComponent},
  {path:'addMovie', component:AddmovieComponent},
  {path:'editMovie', component:EditmovieComponent},
  {path:'viewMovie', component:ViewmovieComponent},
  {path:'movieList', component:MovielistComponent},
  {path:'editMovie/:movieId', component:EditmovieComponent},
  {path:'viewMovie/:movieId', component:ViewmovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
