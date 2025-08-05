// src/app/components/employee-filter/employee-filter.component.ts
import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeFilter} from '../../models/employee-filter';
import { EmployeeService } from '../../services/employeeService';

@Component({
  selector: 'app-employee-filter',
  templateUrl: './employee-filter.component.html',
  styleUrls: ['./employee-filter.component.scss'],
  standalone: false,
})
export class EmployeeFilterComponent implements OnInit {

  filter: EmployeeFilter = {};  // başlangıçta boş
  employees: Employee[] = [];

  genders: string[] = [];
  positions: string[] = [];
  employmentStatuses: string[] = [];
  contractTypes: string[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEnums();
    this.applyFilter();
  }

  loadEnums(): void {
    this.employeeService.getGenders().subscribe(data => this.genders = data);
    this.employeeService.getPositions().subscribe(data => this.positions = data);
    this.employeeService.getEmploymentStatuses().subscribe(data => this.employmentStatuses = data);
    this.employeeService.getContractTypes().subscribe(data => this.contractTypes = data);
  }

  applyFilter(): void {
    this.employeeService.getFilteredEmployees(this.filter).subscribe(data => {
      this.employees = data;
    }, error => {
      console.error('Filtreleme sırasında hata:', error);
    });
  }

  clearFilter(): void {
    this.filter = {};
    this.applyFilter();
  }
}
