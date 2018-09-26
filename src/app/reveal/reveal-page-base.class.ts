import { ElementRef, Inject, OnInit } from '@angular/core';

declare const Reveal;

export class RevealPage implements OnInit {

  constructor(@Inject(ElementRef) elementRef: ElementRef) {
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
    Reveal.nextFragment();
  }

  public prevFragment() {
    Reveal.prevFragment();
  }
}
