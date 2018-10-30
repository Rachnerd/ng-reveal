import { Component, ElementRef, Inject } from '@angular/core';
import { RevealPage } from '../../reveal/reveal-page-base.class';
import { RevealService } from '../../reveal/reveal.service';
import { map } from 'rxjs/operators';
import { HabiticaCoreService, HabiticaLoginData } from '@habitica/core1';

const hideMyApiKey = (data: HabiticaLoginData) => {
  data.apiToken = 'Not today!';
  return data;
};

@Component({
  selector: 'rvl-core-demo1',
  templateUrl: './core-demo1.component.html',
  styleUrls: ['./core-demo1.component.scss']
})
export class CoreDemo1Component extends RevealPage {
  userData: HabiticaLoginData;
  errorMessage: string;
  loading: boolean;

  constructor(
    @Inject(ElementRef) elementRef: ElementRef,
    revealService: RevealService,
    private habiticaCoreService1: HabiticaCoreService
  ) {
    super(elementRef, revealService);
  }

  login(username: string, password: string) {
    this.userData = undefined;
    this.errorMessage = undefined;
    this.loading = true;

    this.habiticaCoreService1
      .login({ username, password })
      .pipe(
        map(hideMyApiKey)
      )
      .subscribe(
        data => {
          this.loading = false;
          this.userData = data;
        },
        error => {
          this.loading = false;
          this.errorMessage = `${error.status} ${error.statusText}`;
        }
      );
  }
}
