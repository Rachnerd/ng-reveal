import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FragmentDirective } from './fragment.directive';
import { SlideDirective } from './slide.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FragmentDirective,
    SlideDirective
  ],
  exports: [
    FragmentDirective,
    SlideDirective
  ]
})
export class RevealModule { }
