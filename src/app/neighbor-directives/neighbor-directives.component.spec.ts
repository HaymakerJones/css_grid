import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeighborDirectivesComponent } from './neighbor-directives.component';

describe('NeighborDirectivesComponent', () => {
  let component: NeighborDirectivesComponent;
  let fixture: ComponentFixture<NeighborDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeighborDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeighborDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
