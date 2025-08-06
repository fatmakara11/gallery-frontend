import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Employee} from '../models/employee.model';
import {EmployeeFilterModel} from '../models/employee-filter-model';

@Injectable({ providedIn: 'root' })
export class FilterService {
  private baseUrl = 'http://localhost:8080/api';
  private apiUrl = 'http://localhost:8080/api/employees';
  constructor(private http: HttpClient) {}

  // Enum dropdown için get istekleri
  getGenders(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/enums/genders`);
  }

  getEmploymentStatuses(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/enums/employment-statuses`);
  }

  getContractTypes(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/enums/contract-types`);
  }

  getPositions(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/enums/positions`);
  }

  // Filtreyi backend'e post ederek filtrelenmiş çalışanları alma
  applyFilter(filterModel: EmployeeFilterModel): Observable<Employee[]> {
    return this.http.post<Employee[]>(`${this.apiUrl}/filter`, filterModel);
  }
}
