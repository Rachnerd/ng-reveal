import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextHowComponent } from './context-how.component';

describe('ContextHowComponent', () => {
  let component: ContextHowComponent;
  let fixture: ComponentFixture<ContextHowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextHowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextHowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
