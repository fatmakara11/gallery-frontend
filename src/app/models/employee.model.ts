import {Department} from './department.model';
import {Team} from './team.model';

export interface Employee {
  id?: number;
  firstName: string;
  lastName: string;
  hireDate: string;
  department: Department;
  team: Team;
}
