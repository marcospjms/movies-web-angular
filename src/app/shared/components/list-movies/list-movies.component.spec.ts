import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMoviesPublicComponent } from './list-movies.component';

describe('ListMoviesComponent', () => {
  let component: ListMoviesPublicComponent;
  let fixture: ComponentFixture<ListMoviesPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMoviesPublicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMoviesPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
