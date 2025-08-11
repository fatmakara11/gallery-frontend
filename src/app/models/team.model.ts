import {Employee} from './employee.model';

export interface Team {
  id?: number;
  name: string;
  employees?: Employee[];
}
