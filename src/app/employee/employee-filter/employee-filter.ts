import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EmployeeFilterModel} from '../../models/employee-filter-model';

import {Gender} from '../../enums/gender';
import {ContractType} from '../../enums/ContractType';
import {EmploymentStatus} from '../../enums/employment-status';
import {FilterService} from '../../services/filterService';
import {Position} from '../../enums/position';
import {Employee} from '../../models/employee.model';

@Component({
  selector: 'app-employee-filter',
  standalone: false,
  templateUrl: './employee-filter.html',
  styleUrl: './employee-filter.scss'
})
export class EmployeeFilter implements OnInit {

  @Output() filterApplied = new EventEmitter<Employee[]>();

  filter:EmployeeFilterModel = {
    firstName: '',
    lastName: '',
    city: '',
    gender: undefined,
    position: undefined,
    contractType: undefined,
    employmentStatus: undefined,
    ageOrder: undefined,
    hireDateOrder: undefined,
  };

  genders = Object.values(Gender);
  positions = Object.values(Position);
  contractTypes = Object.values(ContractType);
  employmentStatuses = Object.values(EmploymentStatus);

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.loadEnums();
    this.applyFilter(); // İstersen başta tüm çalışanları getir
  }

  applyFilter() {
    this.filterService.applyFilter(this.filter).subscribe((filtered) => {
      this.filterApplied.emit(filtered);
    });
  }
  loadEnums() {
    this.filterService.getGenders().subscribe(data => this.genders = data as Gender[]);
    this.filterService.getPositions().subscribe(data => this.positions = data as Position[]);
    this.filterService.getContractTypes().subscribe(data => this.contractTypes = data as ContractType[]);
    this.filterService.getEmploymentStatuses().subscribe(data => this.employmentStatuses = data as EmploymentStatus[]);
  }
  clearFilter() {
    this.filter = {
      firstName: '',
      lastName: '',
      city: '',
      gender: undefined,
      position: undefined,
      contractType: undefined,
      employmentStatus: undefined,
      ageOrder: undefined,
      hireDateOrder: undefined,
    };
    this.applyFilter();
  }

}
