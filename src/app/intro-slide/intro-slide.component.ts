import { Component } from '@angular/core';
import { RevealPage } from '../reveal/reveal-page-base.class';

@Component({
  selector: 'rvl-intro-slide',
  templateUrl: './intro-slide.component.html',
  styleUrls: ['./intro-slide.component.scss']
})
export class IntroSlideComponent extends RevealPage {
  showLogo() {
    console.log('Show');
  }

  hideLogo() {
    console.log('Hide');
  }
}
