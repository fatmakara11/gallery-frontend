import {Component, OnInit} from '@angular/core';
import {Employee} from '../../models/employee.model';
import {Department} from '../../models/department.model';
import {Team} from '../../models/team.model';
import {EmployeeService} from '../../services/employeeService';
import {DepartmentService} from '../../services/departmentservice';
import {TeamService} from '../../services/teamservice';

@Component({
  selector: 'app-employee-page',
  standalone: false,
  templateUrl: './employee-page.html',
  styleUrl: './employee-page.scss'
})
export class EmployeePage implements OnInit {
  employees: Employee[] = [];
  departments: Department[] = [];
  teams: Team[] = [];

  genders: string[] = [];
  positions: string[] = [];
  employmentStatuses: string[] = [];
  contractTypes: string[] = [];

  constructor(
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private teamService: TeamService
  ) {
  }

  ngOnInit(): void {
    this.loadInitialData();
  }

  loadInitialData(): void {
    this.employeeService.getEmployees().subscribe(data => this.employees = data);
    this.employeeService.getGenders().subscribe(data => this.genders = data);
    this.employeeService.getPositions().subscribe(data => this.positions = data);
    this.employeeService.getEmploymentStatuses().subscribe(data => this.employmentStatuses = data);
    this.employeeService.getContractTypes().subscribe(data => this.contractTypes = data);

    this.departmentService.getAllDepartments().subscribe(data => this.departments = data);
    this.teamService.getAllTeams().subscribe(data => this.teams = data);
  }
  handleUpdated() {
    this.employeeService.getEmployees().subscribe((data) => (this.employees = data));
  }

  handleDeleted() {
    this.employeeService.getEmployees().subscribe((data) => (this.employees = data));
  }

  onFilterApplied(filteredEmployees: Employee[]) {
    this.employees = filteredEmployees;
  }
  onEmployeeCreated(employee: Employee) {
    this.employeeService.createEmployee(employee).subscribe({
      next: (savedEmployee) => {
        this.employees.push(savedEmployee); // listeyi güncelle
        alert('Çalışan başarıyla eklendi.');
      },
      error: (err) => {
        console.error('Ekleme hatası:', err);
        alert('Çalışan eklenemedi.');
      }
    });
  }
}
