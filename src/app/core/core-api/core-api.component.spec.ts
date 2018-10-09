import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreApiComponent } from './core-api.component';

describe('CoreApiComponent', () => {
  let component: CoreApiComponent;
  let fixture: ComponentFixture<CoreApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
