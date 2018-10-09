import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealModule } from '../reveal/reveal.module';
import { ContextComponent } from './context/context.component';
import { ContextIntroComponent } from './context-intro/context-intro.component';
import { ContextBusinessCaseComponent } from './context-business-case/context-business-case.component';
import { CodeCategoriesComponent } from './code-categories/code-categories.component';

@NgModule({
  imports: [
    CommonModule,
    RevealModule
  ],
  declarations: [ContextComponent, ContextIntroComponent, ContextBusinessCaseComponent, CodeCategoriesComponent],
  exports: [ContextComponent]
})
export class ContextModule { }
