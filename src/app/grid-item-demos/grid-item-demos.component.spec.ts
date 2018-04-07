import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridItemDemosComponent } from './grid-item-demos.component';

describe('GridItemDemosComponent', () => {
  let component: GridItemDemosComponent;
  let fixture: ComponentFixture<GridItemDemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridItemDemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridItemDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
