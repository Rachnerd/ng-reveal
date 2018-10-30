import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextWhenCrossPlatformComponent } from './context-when-cross-platform.component';

describe('ContextWhenCrossPlatformComponent', () => {
  let component: ContextWhenCrossPlatformComponent;
  let fixture: ComponentFixture<ContextWhenCrossPlatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextWhenCrossPlatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextWhenCrossPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
