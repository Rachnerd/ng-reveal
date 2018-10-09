import { Component } from '@angular/core';
import { RevealPage } from '../../reveal/reveal-page-base.class';

@Component({
  selector: 'rvl-code-categories',
  templateUrl: './code-categories.component.html',
  styleUrls: ['./code-categories.component.scss']
})
export class CodeCategoriesComponent extends RevealPage {
  expand = false;
  showHabitica = false;
  showHabiticaImage = false;
  showStack = false;
  showStackImage = false;
  hideBackground = false;

  beforeNextSlide() {
    (document.getElementsByClassName('slide-background code-categories-slide blur present')[0] as any).style.opacity = '0';
  }

  backFromNextSlide() {
    (document.getElementsByClassName('slide-background code-categories-slide blur present')[0] as any).style.opacity = '1';
  }
}

