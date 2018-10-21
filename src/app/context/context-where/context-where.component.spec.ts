import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextWhereComponent } from './context-where.component';

describe('ContextWhereComponent', () => {
  let component: ContextWhereComponent;
  let fixture: ComponentFixture<ContextWhereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextWhereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextWhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
