import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroSlideComponent } from './intro-slide.component';

describe('IntroSlideComponent', () => {
  let component: IntroSlideComponent;
  let fixture: ComponentFixture<IntroSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntroSlideComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
