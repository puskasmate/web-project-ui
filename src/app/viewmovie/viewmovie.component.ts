import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie';
import { NgserviceService } from '../ngservice.service';

@Component({
  selector: 'app-viewmovie',
  templateUrl: './viewmovie.component.html',
  styleUrls: ['./viewmovie.component.css']
})
export class ViewmovieComponent implements OnInit {

  movie = new Movie();
  
  constructor(private _route:Router, private _service: NgserviceService, private _activatedroute: ActivatedRoute) { }

  ngOnInit() {
    let movieId =  parseInt(this._activatedroute.snapshot.paramMap.get('movieId')!);
    this._service.fetchMovieByIdFromRemote(movieId).subscribe(
      data => {
                console.log("Data succesfully recieved.");
                this.movie=data;
      },
      error => {
        console.log("Something went wrong.");
      }
    );
    
  }

  gotolist() {
    this._route.navigate(['movieList']);
  }

}
