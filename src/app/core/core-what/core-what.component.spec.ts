import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreWhatComponent } from './core-what.component';

describe('CoreWhatComponent', () => {
  let component: CoreWhatComponent;
  let fixture: ComponentFixture<CoreWhatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreWhatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreWhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
