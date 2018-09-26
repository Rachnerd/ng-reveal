import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[rvlBackgroundImage]'
})
export class BackgroundImageDirective implements OnInit {

  @Input()
  rvlBackgroundImage: string;

  @Input()
  blur = true;


  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    if (this.blur) {
      this.el.nativeElement.classList.add('blur');
    }
    this.el.nativeElement.setAttribute('data-background-image', `assets/${this.rvlBackgroundImage}`);
  }
}
