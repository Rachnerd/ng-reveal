import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RevealService } from './reveal.service';

@Directive({
  selector: '[rvlFragment]'
})
export class FragmentDirective implements OnInit {

  @Input()
  onShowDelay: number;

  @Input()
  onHideDelay: number;

  @Input()
  showDuration: number;

  @Output()
  show = new EventEmitter<void>();

  @Output()
  hide = new EventEmitter<void>();

  constructor(private el: ElementRef, private revealService: RevealService) {
  }

  ngOnInit(): void {
    this.el.nativeElement.classList.add('fragment');
    if (this.showDuration) {
      this.el.nativeElement.style.transitionDuration = `${this.showDuration}ms`;
    }

    this.revealService.addFragmentShownHandler((event) => {
      if (event.fragment === this.el.nativeElement) {
        this.onShowDelay ? setTimeout(() => this.show.emit(), this.onShowDelay) : this.show.emit();
      }
    });

    this.revealService.addFragmentHiddenHandler((event) => {
      if (event.fragment === this.el.nativeElement) {
        this.onHideDelay ? setTimeout(() => this.hide.emit(), this.onHideDelay) : this.hide.emit();
      }
    });
  }
}
