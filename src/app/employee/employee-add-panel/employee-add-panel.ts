import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Department} from '../../models/department.model';
import {Team} from '../../models/team.model';
import {Employee} from '../../models/employee.model';

@Component({
  selector: 'app-employee-add-panel',
  standalone: false,
  templateUrl: './employee-add-panel.html',
  styleUrl: './employee-add-panel.scss'
})
export class EmployeeAddPanel {
  @Input() genders: string[] = [];
  @Input() positions: string[] = [];
  @Input() employmentStatuses: string[] = [];
  @Input() contractTypes: string[] = [];
  @Input() departments: Department[] = [];
  @Input() teams: Team[] = [];

  @Output() employeeCreated = new EventEmitter<Employee>();

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

  createEmployee() {
    this.employeeCreated.emit(this.newEmployee);
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









}
