import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { Movie } from "../movie";

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {
movie = new Movie();
  
  constructor(private _route:Router, private _service: NgserviceService) { }

  ngOnInit() {
    
  }

  addMovieformsubmit() 
  {
    this._service.addMovieToRemote(this.movie).subscribe
    (
      data=>
      {
        if(this.movie.movieName==null) {
          console.log("You have to set the title of the movie!")
        }
        else {
          console.log("data added Successfully");
          this._route.navigate(['movieList']);
          }
        },
        error => console.log(error)
    )
  }

  gotolist() {
    this._route.navigate(['movieList']);
  }

}
