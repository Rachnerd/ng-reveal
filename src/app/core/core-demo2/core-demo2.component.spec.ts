import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreDemo2Component } from './core-demo2.component';

describe('CoreDemo2Component', () => {
  let component: CoreDemo2Component;
  let fixture: ComponentFixture<CoreDemo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreDemo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
