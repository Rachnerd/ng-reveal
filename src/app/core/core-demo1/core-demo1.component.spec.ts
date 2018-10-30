import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreDemo1Component } from './core-demo1.component';

describe('CoreDemo1Component', () => {
  let component: CoreDemo1Component;
  let fixture: ComponentFixture<CoreDemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreDemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
