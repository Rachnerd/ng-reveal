import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealModule } from '../reveal/reveal.module';
import { ContextComponent } from './context/context.component';
import { ContextIntroComponent } from './context-intro/context-intro.component';
import { ContextBusinessCaseComponent } from './context-business-case/context-business-case.component';

@NgModule({
  imports: [
    CommonModule,
    RevealModule
  ],
  declarations: [ContextComponent, ContextIntroComponent, ContextBusinessCaseComponent],
  exports: [ContextComponent]
})
export class ContextModule { }
