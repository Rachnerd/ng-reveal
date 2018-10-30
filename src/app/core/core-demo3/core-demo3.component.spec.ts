import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreDemo3Component } from './core-demo3.component';

describe('CoreDemo3Component', () => {
  let component: CoreDemo3Component;
  let fixture: ComponentFixture<CoreDemo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreDemo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreDemo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
