import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFacultateComponent } from './add-facultate.component';

describe('AddFacultateComponent', () => {
  let component: AddFacultateComponent;
  let fixture: ComponentFixture<AddFacultateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFacultateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFacultateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
