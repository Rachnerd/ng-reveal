import { ElementRef, Inject, OnInit } from '@angular/core';
import { RevealService } from './reveal.service';

export class RevealPage implements OnInit {

  constructor(@Inject(ElementRef) elementRef: ElementRef, private revealService: RevealService) {
    const ngOnInit = this.ngOnInit;
    this.ngOnInit = () => {
      const element = elementRef.nativeElement;
      element.parentNode
        .appendChild(element.firstChild);
      element.parentNode.removeChild(element);
      ngOnInit();
    };
  }

  ngOnInit(): void {
  }

  public nextFragment() {
    this.revealService.nextFragment();
  }

  public prevFragment() {
    this.revealService.prevFragment();
  }
}
