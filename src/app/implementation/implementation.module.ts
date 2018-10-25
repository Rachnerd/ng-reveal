import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImplementationComponent } from './implementation/implementation.component';
import { ImplementationIntroComponent } from './implementation-intro/implementation-intro.component';
import { RevealModule } from '../reveal/reveal.module';

@NgModule({
  imports: [
    CommonModule,
    RevealModule
  ],
  declarations: [ImplementationComponent, ImplementationIntroComponent],
  exports: [ImplementationComponent]
})
export class ImplementationModule { }
