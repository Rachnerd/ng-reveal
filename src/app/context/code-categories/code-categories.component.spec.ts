import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeCategoriesComponent } from './code-categories.component';

describe('CodeCategoriesComponent', () => {
  let component: CodeCategoriesComponent;
  let fixture: ComponentFixture<CodeCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
