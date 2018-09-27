import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroSlideComponent } from './intro-slide/intro-slide.component';
import { IntroMyselfComponent } from './intro-myself/intro-myself.component';
import { FragmentDirective } from './reveal/fragment.directive';
import { SlideDirective } from './reveal/slide.directive';
import { RevealService } from './reveal/reveal.service';

@NgModule({
  declarations: [
    AppComponent,
    IntroSlideComponent,
    IntroMyselfComponent,
    FragmentDirective,
    SlideDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [RevealService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
