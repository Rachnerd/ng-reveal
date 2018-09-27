import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { IntroMyselfComponent } from './intro-myself/intro-myself.component';
import { RevealModule } from '../reveal/reveal.module';
import { OpeningSlideComponent } from './opening-slide/opening-slide.component';

@NgModule({
  imports: [
    CommonModule,
    RevealModule
  ],
  declarations: [
    IntroComponent,
    IntroMyselfComponent,
    OpeningSlideComponent
  ],
  exports: [IntroComponent]
})
export class IntroModule {
}
