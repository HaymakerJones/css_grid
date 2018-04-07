import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridContainerDemosComponent } from './grid-container-demos.component';

describe('GridContainerDemosComponent', () => {
  let component: GridContainerDemosComponent;
  let fixture: ComponentFixture<GridContainerDemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridContainerDemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridContainerDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
