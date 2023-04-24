import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializareComponent } from './specializare.component';

describe('SpecializareComponent', () => {
  let component: SpecializareComponent;
  let fixture: ComponentFixture<SpecializareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecializareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecializareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
