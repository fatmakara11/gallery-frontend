import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFilter } from './employee-filter';

describe('EmployeeFilterModel', () => {
  let component: EmployeeFilter;
  let fixture: ComponentFixture<EmployeeFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
