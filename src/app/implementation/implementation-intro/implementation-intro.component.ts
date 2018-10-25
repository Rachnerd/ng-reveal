import { Component } from '@angular/core';
import { RevealPage } from '../../reveal/reveal-page-base.class';

@Component({
  selector: 'rvl-implementation-intro',
  templateUrl: './implementation-intro.component.html',
  styleUrls: ['./implementation-intro.component.scss']
})
export class ImplementationIntroComponent extends RevealPage {
  expand = true;
  expand2 = false;
}
