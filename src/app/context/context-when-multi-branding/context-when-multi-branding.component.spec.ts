import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextWhenMultiBrandingComponent } from './context-when-multi-branding.component';

describe('ContextWhenMultiBrandingComponent', () => {
  let component: ContextWhenMultiBrandingComponent;
  let fixture: ComponentFixture<ContextWhenMultiBrandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextWhenMultiBrandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextWhenMultiBrandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
