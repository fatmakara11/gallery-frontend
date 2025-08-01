import { Gender } from '../enums/gender';
import { Position } from '../enums/position';
import { EmploymentStatus } from '../enums/employment-status';
import { ContractType } from '../enums/ContractType';

export interface EmployeeFilter {
  ageOrder?: 'asc' | 'desc';
  city?: string;
  contractType?: ContractType;
  employmentStatus?:EmploymentStatus;
  firstName?: string;
  gender?: Gender;
  hireDateOrder?: 'asc' | 'desc';
  lastName?: string;
  position?: Position;
}
