import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildBComponent } from './view-child-b.component';

describe('ViewChildBComponent', () => {
  let component: ViewChildBComponent;
  let fixture: ComponentFixture<ViewChildBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
