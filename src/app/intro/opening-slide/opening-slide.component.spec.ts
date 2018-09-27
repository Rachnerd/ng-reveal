import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningSlideComponent } from './opening-slide.component';

describe('OpeningSlideComponent', () => {
  let component: OpeningSlideComponent;
  let fixture: ComponentFixture<OpeningSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpeningSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
