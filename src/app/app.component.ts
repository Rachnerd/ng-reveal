import { Component, ViewEncapsulation } from '@angular/core';

declare const Reveal;
declare const hljs;

@Component({
  selector: 'rvl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'ng-reveal';

  ngAfterViewInit() {
    Reveal.initialize({
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
    });
  }
}
