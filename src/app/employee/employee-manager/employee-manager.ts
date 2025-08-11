import {Component, Input, OnInit, Output} from '@angular/core';
import {Employee} from '../../models/employee.model';
import {Department} from '../../models/department.model';
import {Team} from '../../models/team.model';
import { EventEmitter} from '@angular/core';
import {EmployeeService} from '../../services/employeeService';

@Component({
  selector: 'app-employee-manager',
  templateUrl: './employee-manager.html',
  styleUrl: './employee-manager.scss',
  standalone: false
})
export class EmployeeManager implements OnInit {
  @Input() employees:Employee[]=[];
  @Input() departments:Department[]=[];
  @Input() teams:Team[]=[];
  @Input() genders:String[]=[];
  @Input() positions:String[]=[];
  @Input() employmentStatuses:String[]=[];
  @Input() contractTypes:String[]=[];
  @Output() updated = new EventEmitter<void>();
  @Output() deleted = new EventEmitter<void>();

  editableId: number | null = null;
  editedEmployee!: Employee;
  constructor(private employeeService: EmployeeService) {}
  ngOnInit() {}
  setEditable(emp: Employee) {
    this.editableId = emp.id!;
    this.editedEmployee = { ...emp };
  }
  cancelEdit() {
    this.editableId = null;
  }
  saveUpdate() {
    if (!this.editableId) return;
    this.employeeService.updateEmployee(this.editableId, this.editedEmployee).subscribe(() => {
      this.editableId = null;
      this.updated.emit();
    });
  }
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.deleted.emit();
    });
  }
}
