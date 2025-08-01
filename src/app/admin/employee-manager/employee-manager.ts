import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { Team } from '../../models/team.model';
import { Department } from '../../models/department.model';
import { EmployeeService } from '../../services/employeeService';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-manager',
  templateUrl: './employee-manager.html',
  styleUrls: ['./employee-manager.scss'],
  standalone: false
})
export class EmployeeManager implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  departments: Department[] = [];
  teams: Team[] = [];

  genders: string[] = [];
  positions: string[] = [];
  employmentStatuses: string[] = [];
  contractTypes: string[] = [];

  editableId: number | null = null;

  newEmployee: Employee = {
    firstName: '',
    lastName: '',
    hireDate: '',
    birthDate: '',
    email: '',
    phone: '',
    gender: 'FEMALE',
    position: 'SPECIALIST',
    employmentStatus: 'ACTIVE',
    contractType: 'FULL_TIME',
    department: { id: 0, name: '' },
    team: { id: 0, name: '' },
    city: ''
  };

  constructor(private employeeService: EmployeeService, private http: HttpClient) {}

  ngOnInit(): void {
    this.loadData();
    this.employeeService.getGenders().subscribe(data => this.genders = data);
    this.employeeService.getPositions().subscribe(data => this.positions = data);
    this.employeeService.getEmploymentStatuses().subscribe(data => this.employmentStatuses = data);
    this.employeeService.getContractTypes().subscribe(data => this.contractTypes = data);
  }

  loadData() {
    // Başlangıçta backend'den tüm çalışanları çekelim
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
      this.filteredEmployees = [...data];
    });
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
      birthDate: '',
      email: '',
      phone: '',
      gender: 'FEMALE',
      position: 'SPECIALIST',
      employmentStatus: 'ACTIVE',
      contractType: 'FULL_TIME',
      department: { id: 0, name: '' },
      team: { id: 0, name: '' },
      city: ''
    };
  }
  clearFilterResults(): void {
    this.filteredEmployees = [];
  }
  // Backend API ile filtreleme yapacak fonksiyon
  onFilterChanged(filter: any) {
    const filterPayload: { [key: string]: any } = {
      firstName: filter.firstName?.trim() || undefined,
      lastName: filter.lastName?.trim() || undefined,
      city: filter.city?.trim() || undefined,
      gender: filter.gender || undefined,
      position: filter.position || undefined,
      employmentStatus: filter.employmentStatus || undefined,
      contractType: filter.contractType || undefined,
      ageOrder: filter.ageOrder || undefined,
      hireDateOrder: filter.hireDateOrder || undefined
    };

    Object.keys(filterPayload).forEach(key => {
      if (filterPayload[key] === undefined) {
        delete filterPayload[key];
      }
    });

    this.employeeService.getFilteredEmployees(filterPayload).subscribe(data => {
      this.filteredEmployees = data;
    }, err => {
      console.error('Filtreleme API hatası:', err);
    });
  }

}
