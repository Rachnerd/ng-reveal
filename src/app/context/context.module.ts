import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealModule } from '../reveal/reveal.module';
import { ContextComponent } from './context/context.component';
import { ContextIntroComponent } from './context-intro/context-intro.component';
import { ContextBusinessCaseComponent } from './context-business-case/context-business-case.component';
import { CodeCategoriesComponent } from './code-categories/code-categories.component';
import { ContextWhenComponent } from './context-when/context-when.component';
import { ContextHowComponent } from './context-how/context-how.component';
import { ContextWhereComponent } from './context-where/context-where.component';

@NgModule({
  imports: [
    CommonModule,
    RevealModule
  ],
  declarations: [ContextComponent, ContextIntroComponent, ContextBusinessCaseComponent, CodeCategoriesComponent, ContextWhenComponent, ContextHowComponent, ContextWhereComponent],
  exports: [ContextComponent]
})
export class ContextModule { }
