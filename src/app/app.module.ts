import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroSlideComponent } from './intro-slide/intro-slide.component';
import { IntroMyselfComponent } from './intro-myself/intro-myself.component';
import { FragmentDirective } from './reveal/fragment.directive';
import { BackgroundImageDirective } from './reveal/background-image.directive';

@NgModule({
  declarations: [
    AppComponent,
    IntroSlideComponent,
    IntroMyselfComponent,
    FragmentDirective,
    BackgroundImageDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
