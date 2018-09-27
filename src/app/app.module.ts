import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RevealService } from './reveal/reveal.service';
import { IntroModule } from './intro/intro.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IntroModule
  ],
  providers: [RevealService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
