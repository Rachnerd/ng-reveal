import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextWhenComponent } from './context-when.component';

describe('ContextWhenComponent', () => {
  let component: ContextWhenComponent;
  let fixture: ComponentFixture<ContextWhenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextWhenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextWhenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
