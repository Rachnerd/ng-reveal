import { Injectable } from '@angular/core';

@Injectable()
export class RevealService {
  init() {
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

  nextFragment() {
    Reveal.nextFragment();
  }

  prevFragment() {
    Reveal.prevFragment();
  }

  addFragmentShownHandler(handler) {
    Reveal.addEventListener('fragmentshown', handler);
  }

  addFragmentHiddenHandler(handler) {
    Reveal.addEventListener('fragmenthidden', handler);
  }

  addSlideChangedHandler(handler) {
    Reveal.addEventListener('slidechanged', handler);
  }

  addReadyHandler(handler) {
    Reveal.addEventListener('ready', handler);
  }
}
