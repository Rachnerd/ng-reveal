import { Component } from '@angular/core';
import { RevealPage } from '../../reveal/reveal-page-base.class';

@Component({
  selector: 'rvl-core-features',
  templateUrl: './core-features.component.html',
  styleUrls: ['./core-features.component.scss']
})
export class CoreFeaturesComponent extends RevealPage {
  blurImage1 = true;
  blurImage2 = true;
  blurImage3 = true;
  blurImage4 = true;
  highlightImage1 = false;
  highlightImage2 = false;
  highlightImage3 = false;
  highlightImage4 = false;
  highlightCore = false;
  highlightCore2 = false;
  highlightFeature1 = false;
  highlightFeatureBorder1 = false;
  highlightFeature2 = false;
  highlightFeatureBorder2 = false;

}
