import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeValidationPage } from './code-validation.page';

describe('CodeValidationPage', () => {
  let component: CodeValidationPage;
  let fixture: ComponentFixture<CodeValidationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CodeValidationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
