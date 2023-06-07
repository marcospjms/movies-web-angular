import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivManipulationComponent } from './div-manipulation.component';

describe('DivManipulationComponent', () => {
  let component: DivManipulationComponent;
  let fixture: ComponentFixture<DivManipulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivManipulationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivManipulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
