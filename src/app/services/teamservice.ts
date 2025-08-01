import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Team} from '../models/team.model';
import {Observable} from 'rxjs';
import {Department} from '../models/department.model';
@Injectable({
  providedIn: 'root'
})
export class TeamService  {
   private apiUrl='http://localhost:8080/api/teams';
   constructor(private http:HttpClient){}
  //Tüm takımları getir
  getAllTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.apiUrl);
  }
  //takım ekler
  saveTeam(team: Team):Observable<Team> {
     return this.http.post<Team>(this.apiUrl,team)
  }
  //takım güncellenir
  updateTeam(id: number, team: Team): Observable<Team> {
    return this.http.put<Team>(`${this.apiUrl}/${id}`, team);
  }
  //takım siler
  deleteTeam(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }



}
