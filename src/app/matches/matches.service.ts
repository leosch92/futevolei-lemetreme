import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatchDTO } from '../shared/match-dto';
import { AppConstants } from '../shared/app-constants';
import { Observable } from 'rxjs';
import { Match } from '../shared/match';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  constructor(private http: HttpClient) { }

  addMatch(match: MatchDTO): Observable<any> {
    return this.http.post(AppConstants.baseURL + AppConstants.paths.matches, match);
  }

  getMatches(): Observable<any>{
    return this.http.get(AppConstants.baseURL + AppConstants.paths.matches);
  }
}
