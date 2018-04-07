import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridAreaComponent } from './grid-area.component';

describe('GridAreaComponent', () => {
  let component: GridAreaComponent;
  let fixture: ComponentFixture<GridAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
