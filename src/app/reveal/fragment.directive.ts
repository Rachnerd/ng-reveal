import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';

declare const Reveal;

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

  constructor(el: ElementRef) {
    el.nativeElement.classList.add('fragment');

    Reveal.addEventListener('fragmentshown', (event) => {
      if (event.fragment === el.nativeElement) {
        this.onShowDelay ? setTimeout(() => this.show.emit(), this.onShowDelay) : this.show.emit();
      }
    });

    Reveal.addEventListener('fragmenthidden', (event) => {
      if (event.fragment === el.nativeElement) {
        this.onHideDelay ? setTimeout(() => this.hide.emit(), this.onHideDelay) : this.hide.emit();
      }
    });
  }
}
