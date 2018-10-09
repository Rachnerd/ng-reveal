import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreIntroComponent } from './core-intro.component';

describe('CoreIntroComponent', () => {
  let component: CoreIntroComponent;
  let fixture: ComponentFixture<CoreIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
