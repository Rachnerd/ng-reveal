import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Implementation2Component } from './implementation2.component';

describe('Implementation2Component', () => {
  let component: Implementation2Component;
  let fixture: ComponentFixture<Implementation2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Implementation2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Implementation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
