import { AfterViewInit, Component, ElementRef, Inject, OnInit } from '@angular/core';
import { RevealPage } from '../../reveal/reveal-page-base.class';
import { RevealService } from '../../reveal/reveal.service';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { delay, map, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  HabiticaGetUser,
  HabiticaGetUserTypes,
  HabiticaGetUserUnion,
  HabiticaLogin,
  HabiticaLoginData,
  HabiticaLoginSuccess,
  HabiticaLoginTypes,
  HabiticaLoginUnion
} from '@habitica/core2';

interface CoreDemo3State {
  loading: boolean;
  actionType: string;
  userData?: HabiticaLoginData;
  errorMessage?: string;
}

const hideMyApiKey = (data: HabiticaLoginData) => {
  data.apiToken = 'Not today!';
  return data;
};

function coreDemo3Reducer(action: HabiticaLoginUnion & HabiticaGetUserUnion): CoreDemo3State {
  const state = {actionType: action.type};
  switch (action.type) {
    case HabiticaLoginTypes.LOGIN:
    case HabiticaGetUserTypes.GET:
      return {
        ...state,
        loading: true
      };
    case HabiticaLoginTypes.SUCCESS:
    case HabiticaGetUserTypes.SUCCESS:
      return {
        ...state,
        loading: false,
        userData: hideMyApiKey(action.payload as HabiticaLoginData)
      };
    case HabiticaLoginTypes.ERROR:
    case HabiticaGetUserTypes.ERROR:
      const error = (action.payload as HttpErrorResponse);
      return {
        ...state,
        loading: false,
        errorMessage: `${error.status} ${error.statusText}`
      };
  }
}

@Component({
  selector: 'rvl-core-demo3',
  templateUrl: './core-demo3.component.html',
  styleUrls: ['./core-demo3.component.scss']
})
export class CoreDemo3Component extends RevealPage implements AfterViewInit {

  state$: Observable<CoreDemo3State>;

  constructor(
    @Inject(ElementRef) elementRef: ElementRef,
    revealService: RevealService,
    private store: Store<any>,
    private actions: Actions
  ) {
    super(elementRef, revealService);
    this.state$ = this.actions
      .pipe(
        map(coreDemo3Reducer)
      );
  }

  login(username: string, password: string) {
    this.store.dispatch(new HabiticaLogin({username, password}));
  }

  ngAfterViewInit() {
    this.actions
      .pipe(
        ofType<HabiticaLoginSuccess>(HabiticaLoginTypes.SUCCESS),
        delay(1000),
        tap(() => this.store.dispatch(new HabiticaGetUser()))
      )
      .subscribe();
  }
}
