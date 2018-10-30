import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextWhenApiComponent } from './context-when-api.component';

describe('ContextWhenApiComponent', () => {
  let component: ContextWhenApiComponent;
  let fixture: ComponentFixture<ContextWhenApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextWhenApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextWhenApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
