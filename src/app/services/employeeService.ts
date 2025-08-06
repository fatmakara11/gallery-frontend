import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';
import {EmploymentStatus, Gender, Position} from '../models/employee-types';
import {EmployeeFilterModel} from '../models/employee-filter-model';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private apiUrl = 'http://localhost:8080/api/employees';
  private enumsUrl = 'http://localhost:8080/api/enums';

  constructor(private http: HttpClient) {}

  /** Tüm çalışanları getir */
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  /** Yeni bir çalışan oluştur */
  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee);
  }

  /** ID’ye göre çalışan güncelle */
  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiUrl}/${id}`, employee);
  }

  /** Çalışanı sil */
  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  /** ID’ye göre çalışan getir (opsiyonel kullanılabilir) */
  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${id}`);
  }

  /** ENUM verileri çekme */
  getGenders(): Observable<string[]> {
    return this.http.get<string[]>(`${this.enumsUrl}/genders`);
  }

  getPositions(): Observable<string[]> {
    return this.http.get<string[]>(`${this.enumsUrl}/positions`);
  }

  getContractTypes(): Observable<string[]> {
    return this.http.get<string[]>(`${this.enumsUrl}/contract-types`);
  }

  getEmploymentStatuses(): Observable<string[]> {
    return this.http.get<string[]>(`${this.enumsUrl}/employment-statuses`);
  }

  /**FİLTRELEME İÇİN */
  getFilteredEmployees(filters: EmployeeFilterModel): Observable<Employee[]> {
    return this.http.post<Employee[]>(`${this.apiUrl}/filter`, filters);
  }

}
