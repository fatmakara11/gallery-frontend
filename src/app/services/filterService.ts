import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FilterService {
  private baseUrl = 'http://localhost:8080/api/enums';

  constructor(private http: HttpClient) {}

  getGenders(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/genders`);
  }

  getEmploymentStatuses(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/employment-statuses`);
  }

  getContractTypes(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/contract-types`);
  }
  getPositions(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/positions`);
  }
}
