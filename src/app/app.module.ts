import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RevealService } from './reveal/reveal.service';
import { IntroModule } from './intro/intro.module';
import { ContextModule } from './context/context.module';
import { RevealModule } from './reveal/reveal.module';
import { CoreModule } from './core/core.module';
import { ImplementationModule } from './implementation/implementation.module';
import { Implementation2Module } from './implementation2/implementation2.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IntroModule,
    ContextModule,
    CoreModule,
    ImplementationModule,
    Implementation2Module,
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
