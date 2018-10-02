import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextBusinessCaseComponent } from './context-business-case.component';

describe('ContextBusinessCaseComponent', () => {
  let component: ContextBusinessCaseComponent;
  let fixture: ComponentFixture<ContextBusinessCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextBusinessCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextBusinessCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
