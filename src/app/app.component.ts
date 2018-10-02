import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { RevealService } from './reveal/reveal.service';

@Component({
  selector: 'rvl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  title = 'ng-reveal';
  showLogo = false;

  constructor(private revealService: RevealService) {
  }

  ngAfterViewInit() {
    this.revealService.init();

    this.revealService.addSlideChangedHandler(event => {
      this.setShowLogo(event);
    });

    this.revealService.addReadyHandler(event => {
      this.setShowLogo(event);
    });
  }


  private setShowLogo(event) {
    this.showLogo = event.currentSlide.getAttribute('data-hide-logo') !== 'true';
  }
}
