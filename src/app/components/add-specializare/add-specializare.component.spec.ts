import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpecializareComponent } from './add-specializare.component';

describe('AddSpecializareComponent', () => {
  let component: AddSpecializareComponent;
  let fixture: ComponentFixture<AddSpecializareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSpecializareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSpecializareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
