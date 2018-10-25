import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementationIntroComponent } from './implementation-intro.component';

describe('ImplementationIntroComponent', () => {
  let component: ImplementationIntroComponent;
  let fixture: ComponentFixture<ImplementationIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImplementationIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplementationIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
