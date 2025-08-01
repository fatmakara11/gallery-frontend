import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { Team } from '../../models/team.model';
import { Department } from '../../models/department.model';
import { EmployeeService } from '../../services/employeeService';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-manager',
  standalone: false,
  templateUrl: './employee-manager.html',
  styleUrl: './employee-manager.scss'
})
export class EmployeeManager implements OnInit {
  employees: Employee[] = [];
  departments: Department[] = [];
  teams: Team[] = [];

  editableId: number | null = null;

  newEmployee: Employee = {
    firstName: '',
    lastName: '',
    hireDate: '',
    department: { id: 0, name: '' },
    team: { id: 0, name: '' }
  };

  constructor(private employeeService: EmployeeService, private http: HttpClient) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.employeeService.getEmployees().subscribe(data => this.employees = data);
    this.http.get<Department[]>('http://localhost:8080/api/departments').subscribe(d => this.departments = d);
    this.http.get<Team[]>('http://localhost:8080/api/teams').subscribe(t => this.teams = t);
  }

  createEmployee() {
    this.employeeService.createEmployee(this.newEmployee).subscribe(() => {
      this.loadData();
      this.resetForm();
    });
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(() => this.loadData());
  }

  setEditable(emp: Employee) {
    this.editableId = emp.id!;
    this.newEmployee = { ...emp };
  }

  saveUpdate() {
    if (this.editableId) {
      this.employeeService.updateEmployee(this.editableId, this.newEmployee).subscribe(() => {
        this.loadData();
        this.cancelEdit();
      });
    }
  }

  cancelEdit() {
    this.editableId = null;
    this.resetForm();
  }

  resetForm() {
    this.newEmployee = {
      firstName: '',
      lastName: '',
      hireDate: '',
      department: { id: 0, name: '' },
      team: { id: 0, name: '' }
    };
  }
}
