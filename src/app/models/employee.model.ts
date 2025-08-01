import {Department} from './department.model';
import {Team} from './team.model';

import {
  Gender,
  Position,
  ContractType,
  EmploymentStatus,
} from './employee-types';

export interface Employee {
  id?: number;
  firstName: string;
  lastName: string;
  hireDate: string;
  birthDate?: string;
  email?: string;
  phone?: string;
  gender?: Gender;
  position?: Position;
  employmentStatus?: EmploymentStatus;
  contractType?: ContractType;
  department: Department;
  team: Team;
  city: string;
}
