import { Component, ElementRef, Inject } from '@angular/core';
import { RevealPage } from '../../reveal/reveal-page-base.class';
import { RevealService } from '../../reveal/reveal.service';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HabiticaLogin, HabiticaLoginData, HabiticaLoginTypes, HabiticaLoginUnion } from '@habitica/core1-ngrx';

interface CoreDemo2State {
  loading: boolean;
  actionType: string;
  userData?: HabiticaLoginData;
  errorMessage?: string;
}

const hideMyApiKey = (data: HabiticaLoginData) => {
  data.apiToken = 'Not today!';
  return data;
};

function coreDemo2Reducer (action: HabiticaLoginUnion): CoreDemo2State {
  const state = {actionType: action.type};
  switch (action.type) {
    case HabiticaLoginTypes.LOGIN:
      return {
        ...state,
        loading: true
      };
    case HabiticaLoginTypes.SUCCESS:
      return {
        ...state,
        loading: false,
        userData: hideMyApiKey(action.payload as HabiticaLoginData)
      };
    case HabiticaLoginTypes.ERROR:
      const error = (action.payload as HttpErrorResponse);
      return {
        ...state,
        loading: false,
        errorMessage: `${error.status} ${error.statusText}`
      };
  }
}

@Component({
  selector: 'rvl-core-demo2',
  templateUrl: './core-demo2.component.html',
  styleUrls: ['./core-demo2.component.scss']
})
export class CoreDemo2Component extends RevealPage {

  state$: Observable<CoreDemo2State>;

  constructor(
    @Inject(ElementRef) elementRef: ElementRef,
    revealService: RevealService,
    private store: Store<any>,
    private actions: Actions
  ) {
    super(elementRef, revealService);
    this.state$ = this.actions
      .pipe(
        map(coreDemo2Reducer)
      );
  }

  login(username: string, password: string) {
    this.store.dispatch(new HabiticaLogin({username, password}));
  }
}
