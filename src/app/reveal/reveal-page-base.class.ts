import { ElementRef, Inject, OnInit } from '@angular/core';
import { RevealService } from './reveal.service';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export class RevealPage implements OnInit {
  private activeFragment = -1;
  private indexh = undefined;
  private indexv = undefined;
  private isActive = false;

  constructor(@Inject(ElementRef) elementRef: ElementRef, private revealService: RevealService) {
    this.hack(elementRef);
    this.revealService.addFragmentShownHandler(event => {
      if (this.isActive) {
        this.activeFragment = parseInt(event.fragment.dataset.fragmentIndex, 10);
      }
    });
    this.revealService.addFragmentHiddenHandler(event => {
      if (this.isActive) {
        this.activeFragment = parseInt(event.fragment.dataset.fragmentIndex, 10) - 1;
      }
    });
    this.revealService.addSlideChangedHandler(event => {
      this.isActive = event.indexh === this.indexh && event.indexv === this.indexv;
    });
    this.revealService.addReadyHandler(event => {
      this.isActive = event.indexh === this.indexh && event.indexv === this.indexv;
    });
  }

  /**
   * Reveal expects <section> tags in a specific hierarchy. This hack removes the component selector tag
   * so that it becomes compatible with Reveal.
   */
  hack(elementRef: ElementRef) {
    const ngOnInit = this.ngOnInit;
    this.ngOnInit = () => {
      const element = elementRef.nativeElement;
      const target = element.firstChild;
      element.parentNode.replaceChild(target, element);
      const container = document.getElementsByClassName('slides')[0];
      const slides = container.children;
      for (let i = 0; i < slides.length; i++) {
        if (slides[i].contains(target)) {
          this.indexh = i;
          for (let j = 0; j < slides[i].children.length; j++) {
            if (slides[i].children[j].contains(target)) {
              this.indexv = j;
            }
          }
        }
      }
      ngOnInit();
    };
  }

  ngOnInit(): void {
  }

  fragmentActive(...ns) {
    return ns.some(n => this.activeFragment === n);
  }

  fragmentActivated(n) {
    return this.activeFragment >= n;
  }

  nextFragment() {
    this.revealService.nextFragment();
  }

  prevFragment() {
    this.revealService.prevFragment();
  }


  nextSlide() {
    this.revealService.nextSlide();
  }

  prevSlide() {
    this.revealService.prevSlide();
  }

  isFragmentsEnabled() {
    return this.revealService.isFragmentsEnabled();
  }
}
