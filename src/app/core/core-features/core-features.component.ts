import { Component } from '@angular/core';
import { RevealPage } from '../../reveal/reveal-page-base.class';
import { RevealService } from '../../reveal/reveal.service';

@Component({
  selector: 'rvl-core-features',
  templateUrl: './core-features.component.html',
  styleUrls: ['./core-features.component.scss'],
  viewProviders: [RevealService]
})
export class CoreFeaturesComponent extends RevealPage {
  private outerStartIndex = 9;

  outerIndex(n) {
    return this.outerStartIndex + n;
  }
}
