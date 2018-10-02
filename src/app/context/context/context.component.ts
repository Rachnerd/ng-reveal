import { Component, ViewChild } from '@angular/core';
import { RevealPage } from '../../reveal/reveal-page-base.class';

@Component({
  selector: 'rvl-context',
  templateUrl: './context.component.html',
  styleUrls: ['./context.component.scss']
})
export class ContextComponent extends RevealPage {
  @ViewChild('title') title;

  test() {
    this.title.nativeElement.style.top = '10%';
    this.nextFragment();
  }

  untest() {
    this.title.nativeElement.style.top = '40%';
    this.prevFragment();
  }
}
