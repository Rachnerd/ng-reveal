import { Component } from '@angular/core';
import { RevealPage } from '../../reveal/reveal-page-base.class';

@Component({
  selector: 'rvl-context-business-case',
  templateUrl: './context-business-case.component.html',
  styleUrls: ['./context-business-case.component.scss']
})
export class ContextBusinessCaseComponent extends RevealPage {
  isExpanded = !this.isFragmentsEnabled();
  isVisible = !this.isFragmentsEnabled();

  expand() {
    this.isExpanded = true;
  }

  shrink() {
    this.isExpanded = false;
  }

  show() {
    this.isVisible = true;
  }

  hide() {
    this.isVisible = false;
  }
}
