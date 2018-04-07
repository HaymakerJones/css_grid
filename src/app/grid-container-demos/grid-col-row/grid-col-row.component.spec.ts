import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridColRowComponent } from './grid-col-row.component';

describe('GridColRowComponent', () => {
  let component: GridColRowComponent;
  let fixture: ComponentFixture<GridColRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridColRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridColRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
