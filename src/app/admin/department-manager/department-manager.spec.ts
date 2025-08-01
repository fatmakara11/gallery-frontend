import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentManager } from './department-manager';

describe('DepartmentManager', () => {
  let component: DepartmentManager;
  let fixture: ComponentFixture<DepartmentManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepartmentManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentManager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
