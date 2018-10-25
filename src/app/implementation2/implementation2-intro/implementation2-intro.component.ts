import { Component } from '@angular/core';
import { RevealPage } from '../../reveal/reveal-page-base.class';

@Component({
  selector: 'rvl-implementation2-intro',
  templateUrl: './implementation2-intro.component.html',
  styleUrls: ['./implementation2-intro.component.scss']
})
export class Implementation2IntroComponent extends RevealPage {
  expand = true;
  expand2 = false;
}
