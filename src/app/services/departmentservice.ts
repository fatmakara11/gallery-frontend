import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from '../models/department.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DepartmentService {
  private apiUrl = 'http://localhost:8080/api/departments';

  constructor(private http: HttpClient) {}
//tüm departmanları getirir
  getAllDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl);
  }
//departman ekler
  saveDepartment(department: Department): Observable<Department> {
    return this.http.post<Department>(this.apiUrl, department);
  }
//departman günceller
  updateDepartment(id: number, department: Department): Observable<Department> {
    return this.http.put<Department>(`${this.apiUrl}/${id}`, department);
  }
//departman siler
  deleteDepartment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
