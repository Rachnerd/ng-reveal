import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreAddFeatureComponent } from './core-add-feature.component';

describe('CoreAddFeatureComponent', () => {
  let component: CoreAddFeatureComponent;
  let fixture: ComponentFixture<CoreAddFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreAddFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreAddFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
