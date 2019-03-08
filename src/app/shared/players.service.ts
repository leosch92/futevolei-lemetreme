import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from './player';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from './app-constants';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  
  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Player[]>{
    return this.http.get<Player[]>(AppConstants.baseURL + AppConstants.paths.players);
  }
}
