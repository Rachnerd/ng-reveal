import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreDemo4Component } from './core-demo4.component';

describe('CoreDemo4Component', () => {
  let component: CoreDemo4Component;
  let fixture: ComponentFixture<CoreDemo4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreDemo4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreDemo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
