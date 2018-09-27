import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RevealService } from './reveal/reveal.service';
import { IntroModule } from './intro/intro.module';
import { RevealModule } from './reveal/reveal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IntroModule,
    RevealModule.forRoot({
      display: 'flex',
      history: true,
      fragments: true,
      dependencies: [
        {src: '../reveal/plugin/markdown/marked.js'},
        {src: '../reveal/plugin/markdown/markdown.js'},
        {src: '../reveal/plugin/notes/notes.js', async: true},
        {
          src: '../reveal/plugin/highlight/highlight.js', async: true, callback: function () {
            hljs.initHighlightingOnLoad();
          }
        }
      ]
    })
  ],
  providers: [RevealService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
