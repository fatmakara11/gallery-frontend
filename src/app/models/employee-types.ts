// employee-types.ts
export type Gender = 'FEMALE' | 'MALE';

export type Position =
  | 'INTERN'
  | 'SPECIALIST'
  | 'SENIOR_SPECIALIST'
  | 'TEAM_LEAD'
  | 'MANAGER'
  | 'PROJECT_MANAGER'
  | 'DIRECTOR';

export type ContractType = 'FULL_TIME' | 'PART_TIME' | 'INTERN';

export type EmploymentStatus = 'ACTIVE' | 'ON_LEAVE' | 'RESIGNED';
