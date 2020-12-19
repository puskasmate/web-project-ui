import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  constructor(private _http:HttpClient) { }


  fetchMovieListFromRemote():Observable<any> {
    return this._http.get<any>("http://localhost:8080/getMovieList");
  }

  addMovieToRemote(movie : Movie ):Observable<any> {
    return this._http.post<any>("http://localhost:8080/addMovieToList", movie);
  }

  fetchMovieByIdFromRemote(movieId : number):Observable<any> {
    return this._http.get<any>("http://localhost:8080/getMovieById/"+movieId);
  }

  deleteMovieByIdFromRemote(movieId : number):Observable<any> {
    return this._http.delete("http://localhost:8080/deleteMovieById/"+movieId, { responseType: 'text' as 'json'});
  }
  
}
