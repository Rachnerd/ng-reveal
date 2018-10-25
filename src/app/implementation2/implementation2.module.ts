import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Implementation2Component } from './implementation2/implementation2.component';
import { Implementation2IntroComponent } from './implementation2-intro/implementation2-intro.component';
import { RevealModule } from '../reveal/reveal.module';

@NgModule({
  imports: [
    CommonModule,
    RevealModule
  ],
  declarations: [Implementation2Component, Implementation2IntroComponent],
  exports: [Implementation2Component]
})
export class Implementation2Module {
}
