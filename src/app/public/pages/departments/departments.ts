import {Component, OnInit} from '@angular/core';
import {DepartmentService} from '../../../services/departmentservice';
import {Department} from '../../../models/department.model';
import {Stats} from '../../../services/stats';


@Component({
  selector: 'app-departments',
  standalone: false,
  templateUrl: './departments.html',
  styleUrl: './departments.scss'
})
export class Departments implements OnInit {
  departments: Department[] = [];
  departmentCount = 0;
  teamCount = 0;
  employeeCount = 0;

  constructor(
    private departmentService: DepartmentService,
    private statsService: Stats
  ) {}

  ngOnInit(): void {
    this.loadDepartments();
    this.loadCounts();
  }

  loadDepartments(): void {
    this.departmentService.getAllDepartments().subscribe(data => {
      this.departments = data;
    });
  }

  loadCounts(): void {
    this.statsService.getDepartmentCount().subscribe(count => {
      this.departmentCount = count;
    });

    this.statsService.getTeamCount().subscribe(count => {
      this.teamCount = count;
    });

    this.statsService.getEmployeeCount().subscribe(count => {
      this.employeeCount = count;
    });
  }
}
