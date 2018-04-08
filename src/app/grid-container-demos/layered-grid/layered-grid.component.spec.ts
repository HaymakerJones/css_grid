import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayeredGridComponent } from './layered-grid.component';

describe('LayeredGridComponent', () => {
  let component: LayeredGridComponent;
  let fixture: ComponentFixture<LayeredGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayeredGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayeredGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
