import { Component } from '@angular/core';
import { RevealPage } from '../../reveal/reveal-page-base.class';

@Component({
  selector: 'rvl-core-login',
  templateUrl: './core-login.component.html',
  styleUrls: ['./core-login.component.scss']
})
export class CoreLoginComponent extends RevealPage {
  blurImage1 = true;
  blurImage2 = true;
  blurImage3 = true;
  blurImage4 = true;
  highlightCore = false;
}
