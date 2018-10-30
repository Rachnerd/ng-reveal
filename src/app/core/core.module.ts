import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core/core.component';
import { CoreIntroComponent } from './core-intro/core-intro.component';
import { RevealModule } from '../reveal/reveal.module';
import { CoreWhatComponent } from './core-what/core-what.component';
import { CoreApiComponent } from './core-api/core-api.component';
import { CoreFeaturesComponent } from './core-features/core-features.component';
import { CoreModuleComponent } from './core-module/core-module.component';
import { CoreDemo1Component } from './core-demo1/core-demo1.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CoreDemo2Component } from './core-demo2/core-demo2.component';
import { HabiticaCoreModule } from '@habitica/core1-ngrx';
import { HabiticaCoreModule as HabiticaCoreModule2 } from '@habitica/core2';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CoreDemo3Component } from './core-demo3/core-demo3.component';
import { CoreAddFeatureComponent } from './core-add-feature/core-add-feature.component';
import { CoreDemo4Component } from './core-demo4/core-demo4.component';
import { HabiticaTasksModule } from '@habitica/tasks';

@NgModule({
  imports: [
    CommonModule,
    RevealModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HabiticaCoreModule,
    HabiticaCoreModule2.forRoot(),
    HabiticaTasksModule.forRoot()
  ],
  declarations: [CoreComponent, CoreIntroComponent, CoreWhatComponent, CoreApiComponent, CoreFeaturesComponent, CoreModuleComponent, CoreDemo1Component, CoreDemo2Component, CoreDemo3Component, CoreAddFeatureComponent, CoreDemo4Component],
  exports: [CoreComponent]
})
export class CoreModule {
}
