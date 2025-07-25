import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentGallery } from './component-gallery';

describe('ComponentGallery', () => {
  let component: ComponentGallery;
  let fixture: ComponentFixture<ComponentGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentGallery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentGallery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
