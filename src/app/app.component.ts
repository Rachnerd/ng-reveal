import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { RevealService } from './reveal/reveal.service';

declare const Reveal;
declare const hljs;

@Component({
  selector: 'rvl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  title = 'ng-reveal';

  constructor(private revealService: RevealService) {
  }

  ngAfterViewInit() {
    this.revealService.init();
  }
}
