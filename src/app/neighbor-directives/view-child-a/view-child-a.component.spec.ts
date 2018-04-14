import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildAComponent } from './view-child-a.component';

describe('ViewChildAComponent', () => {
  let component: ViewChildAComponent;
  let fixture: ComponentFixture<ViewChildAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
