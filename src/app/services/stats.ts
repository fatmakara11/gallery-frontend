import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Stats {
  private baseUrl = 'http://localhost:8080/api/stats';

  constructor(private http: HttpClient) {}

  getDepartmentCount(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/departments/count`);
  }

  getTeamCount(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/teams/count`);
  }

  getEmployeeCount(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/employees/count`);
  }
  getEmployeeCountByDepartment() {
    return this.http.get<{ [key: string]: number }>(`${this.baseUrl}/employee-count-by-department`);
  }
}

