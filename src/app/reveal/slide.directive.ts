import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RevealService } from './reveal.service';

@Directive({
  selector: '[rvlSlide]'
})
export class SlideDirective implements OnInit {

  @Input()
  rvlSlide: string;

  @Input()
  blur = true;

  @Input()
  onShowDelay: number;

  @Input()
  onHideDelay: number;

  @Output()
  show = new EventEmitter();

  @Output()
  hide = new EventEmitter();

  constructor(private el: ElementRef, private revealService: RevealService) {
  }

  ngOnInit() {
    if (this.blur) {
      this.el.nativeElement.classList.add('blur');
    }

    this.el.nativeElement.setAttribute('data-background-image', `assets/${this.rvlSlide}`);

    this.revealService.addSlideChangedHandler((event) => {
      if (event.currentSlide === this.el.nativeElement) {
        this.onShowDelay ? setTimeout(() => this.show.emit(), this.onShowDelay) : this.show.emit();
      } else if (event.previousSlide === this.el.nativeElement) {
        this.onHideDelay ? setTimeout(() => this.hide.emit(), this.onHideDelay) : this.hide.emit();
      }
    });

    this.revealService.addReadyHandler((event) => {
      if (event.currentSlide === this.el.nativeElement) {
        this.onShowDelay ? setTimeout(() => this.show.emit(), this.onShowDelay) : this.show.emit();
      }
    });
  }
}
