import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultatiComponent } from './facultati.component';

describe('FacultatiComponent', () => {
  let component: FacultatiComponent;
  let fixture: ComponentFixture<FacultatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultatiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
