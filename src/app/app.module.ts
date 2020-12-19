import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { MovielistComponent } from './movielist/movielist.component';
import { EditmovieComponent } from './editmovie/editmovie.component';
import { ViewmovieComponent } from './viewmovie/viewmovie.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddmovieComponent,
    MovielistComponent,
    EditmovieComponent,
    ViewmovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
