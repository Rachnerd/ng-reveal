import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Implementation2IntroComponent } from './implementation2-intro.component';

describe('Implementation2IntroComponent', () => {
  let component: Implementation2IntroComponent;
  let fixture: ComponentFixture<Implementation2IntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Implementation2IntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Implementation2IntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
