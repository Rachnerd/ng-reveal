import { AfterViewInit, Component, ElementRef, Inject } from '@angular/core';
import { RevealPage } from '../../reveal/reveal-page-base.class';
import { RevealService } from '../../reveal/reveal.service';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { delay, filter, map, switchMap, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  HabiticaGetUserSuccess,
  HabiticaGetUserTypes,
  HabiticaGetUserUnion,
  HabiticaLogin,
  HabiticaLoginData,
  HabiticaLoginTypes,
  HabiticaLoginUnion, HabiticaUser
} from '@habitica/core2';
import { HabiticaGetDailys, HabiticaGetHabits, HabiticaGetTodos } from '@habitica/tasks';

interface CoreDemo4State {
  loading: boolean;
  actionType: string;
  userData?: HabiticaLoginData;
  errorMessage?: string;
}

const hideMyApiKey = (data: HabiticaLoginData) => {
  data.apiToken = 'Not today!';
  return data;
};

function coreDemo4Reducer(action: HabiticaLoginUnion & HabiticaGetUserUnion): CoreDemo4State {
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
  selector: 'rvl-core-demo4',
  templateUrl: './core-demo4.component.html',
  styleUrls: ['./core-demo4.component.scss']
})
export class CoreDemo4Component extends RevealPage implements AfterViewInit {

  state$: Observable<CoreDemo4State>;

  constructor(
    @Inject(ElementRef) elementRef: ElementRef,
    revealService: RevealService,
    private store: Store<any>,
    private actions: Actions
  ) {
    super(elementRef, revealService);
    this.state$ = this.actions
      .pipe(
        filter(action =>
          Object.keys(HabiticaGetUserTypes).some(key => action.type === HabiticaGetUserTypes[key]) ||
          Object.keys(HabiticaLoginTypes).some(key => action.type === HabiticaLoginTypes[key])
        ),
        map(coreDemo4Reducer)
      );
  }

  login(username: string, password: string) {
    this.store.dispatch(new HabiticaLogin({username, password}));
  }

  ngAfterViewInit() {
    this.actions
      .pipe(
        ofType<HabiticaGetUserSuccess>(HabiticaGetUserTypes.SUCCESS),
        map(data => data.payload),
        switchMap(({tasksOrder: {dailys, habits, todos}}: HabiticaUser) => [
          new HabiticaGetDailys(dailys),
          new HabiticaGetHabits(habits),
          new HabiticaGetTodos(todos),
        ]),
        delay(1000),
        tap(action => this.store.dispatch(action))
      )
      .subscribe();
  }
}
