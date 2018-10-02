import { ElementRef, Inject, OnInit } from '@angular/core';
import { RevealService } from './reveal.service';

export class RevealPage implements OnInit {

  constructor(@Inject(ElementRef) elementRef: ElementRef, private revealService: RevealService) {
    this.hack(elementRef);
  }

  /**
   * Reveal expects <section> tags in a specific hierarchy. This hack removes the component selector tag
   * so that it becomes compatible with Reveal.
   */
  hack(elementRef: ElementRef) {
    const ngOnInit = this.ngOnInit;
    this.ngOnInit = () => {
      const element = elementRef.nativeElement;
      element.parentNode.replaceChild(element.firstChild, element);
      ngOnInit();
    };
  }

  ngOnInit(): void {
  }

  nextFragment() {
    this.revealService.nextFragment();
  }

  prevFragment() {
    this.revealService.prevFragment();
  }
}
