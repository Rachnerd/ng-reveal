import { Inject, Injectable } from '@angular/core';
import { REVEAL_CONFIG } from './reveal.config';

@Injectable()
export class RevealService {
  constructor(@Inject(REVEAL_CONFIG) private revealConfig: any) {
  }

  init() {
    Reveal.initialize(this.revealConfig);
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
