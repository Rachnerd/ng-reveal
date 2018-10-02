import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RevealService } from './reveal.service';

@Directive({
  selector: '[rvlFragment]'
})
export class FragmentDirective implements OnInit {

  @Input()
  nextDelay: number;

  @Input()
  backDelay: number;

  @Input()
  duration: number;

  @Input()
  autoNext = false;

  @Input()
  autoBack = false;

  @Output()
  show = new EventEmitter<void>();

  @Output()
  hide = new EventEmitter<void>();

  constructor(private el: ElementRef, private revealService: RevealService) {
  }

  ngOnInit(): void {
    this.el.nativeElement.classList.add('fragment');
    if (this.duration) {
      this.el.nativeElement.style.transitionDuration = `${this.duration}ms`;
    }

    this.revealService.addFragmentShownHandler((event) => {
      if (event.fragment === this.el.nativeElement) {
        this.fragmentShown();
      }
    });

    this.revealService.addFragmentHiddenHandler((event) => {
      if (event.fragment === this.el.nativeElement) {
        this.fragmentHidden();
      }
    });
  }

  private fragmentShown() {
    this.isFragmentReady(this.duration)
      .then(() => this.show.emit());
    if (this.autoNext) {
      this.isFragmentReady(this.nextDelay)
        .then(() => this.revealService.nextFragment());
    }
  }

  private isFragmentReady(duration) {
    return new Promise(resolve => duration ? setTimeout(() => resolve(), duration) : resolve());
  }

  private fragmentHidden() {
    this.isFragmentReady(this.duration)
      .then(() => this.hide.emit());

    if (this.autoBack) {
      this.isFragmentReady(this.backDelay)
        .then(() => this.revealService.prevFragment());
    }
  }

  private hideFragment() {
    this.backDelay ? setTimeout(() => this.hide.emit(), this.backDelay) : this.hide.emit();
  }
}
