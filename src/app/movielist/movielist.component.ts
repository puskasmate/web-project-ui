import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie';
import { NgserviceService } from '../ngservice.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

  _movielist: Movie[] = [];
  dirr!: number;

  constructor(private _service:NgserviceService, private _rout:Router) { }

  ngOnInit() {
              this._service.fetchMovieListFromRemote().subscribe(
                data=>{ console.log("Response recieved");
                        this._movielist=data;
              },
                error=>console.log("Exception occured") 
              )
            }

  goToAddMovie () {
    this._rout.navigate(["/addMovie"])
  }
  gotolist() {
    this._service.fetchMovieListFromRemote().subscribe(
      data => { console.log("Response recieved");
              this._movielist=data;
              
    },
    error => console.log("Exception occured") 
    )
  }
  

  goToEditMovie(movieId : number) {
    this._rout.navigate(["/editMovie", movieId]);
  }

  goToViewMovie(movieId : number) {
    this._rout.navigate(["/viewMovie", movieId]);
  }

  deleteMovie(movieId : number) {
    if (confirm('Are you sure ?')) {
    return this._service.deleteMovieByIdFromRemote(movieId).subscribe(
      data => { 
        console.log("Data deleted successfully.");
      this._movielist=data.results;
      this.gotolist();
      this._rout.navigate(["/movieList"]);
               
    },
    error=>  { console.log(error)
  }
    );
}

    else
    return this._rout.navigate(["/movieList"]);
    
  };
}
