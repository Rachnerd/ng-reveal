import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroMyselfComponent } from './intro-myself.component';

describe('IntroMyselfComponent', () => {
  let component: IntroMyselfComponent;
  let fixture: ComponentFixture<IntroMyselfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntroMyselfComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroMyselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
