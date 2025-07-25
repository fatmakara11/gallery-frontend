import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAbout } from './component-about';

describe('ComponentAbout', () => {
  let component: ComponentAbout;
  let fixture: ComponentFixture<ComponentAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentAbout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentAbout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
