import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

let base_url = environment.base_url_rick_morty;
@Injectable({
  providedIn: 'root'
})
export class RickMortyApiService {

  constructor(private http:HttpClient) { }

  getCharacters(page:number=1):Observable<any> {
    return this.http.get(`${base_url}/character/?page=${page}`);
  }
  
  getEpisode(episode:number=1):Observable<any> {
    return this.http.get(`${base_url}/episode/${episode}`);
  }
  
  getByUrl(url:string):Observable<any> {
    return this.http.get(url);
  }

  getLocation(location:number=1):Observable<any> {
    return this.http.get(`${base_url}/location/${location}`);
  }
}
