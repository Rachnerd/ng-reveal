import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { RevealService } from './reveal.service';

@Directive({
  selector: '[rvlFragment]'
})
export class FragmentDirective {

  @Input()
  onShowDelay: number;

  @Input()
  onHideDelay: number;

  @Output()
  show = new EventEmitter<void>();

  @Output()
  hide = new EventEmitter<void>();

  constructor(el: ElementRef, revealService: RevealService) {
    el.nativeElement.classList.add('fragment');

    revealService.addFragmentShownHandler((event) => {
      if (event.fragment === el.nativeElement) {
        this.onShowDelay ? setTimeout(() => this.show.emit(), this.onShowDelay) : this.show.emit();
      }
    });

    revealService.addFragmentHiddenHandler((event) => {
      if (event.fragment === el.nativeElement) {
        this.onHideDelay ? setTimeout(() => this.hide.emit(), this.onHideDelay) : this.hide.emit();
      }
    });
  }
}
