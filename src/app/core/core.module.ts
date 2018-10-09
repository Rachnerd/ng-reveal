import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core/core.component';
import { CoreIntroComponent } from './core-intro/core-intro.component';
import { RevealModule } from '../reveal/reveal.module';
import { CoreWhatComponent } from './core-what/core-what.component';
import { CoreApiComponent } from './core-api/core-api.component';
import { CoreLoginComponent } from './core-login/core-login.component';

@NgModule({
  imports: [
    CommonModule,
    RevealModule
  ],
  declarations: [CoreComponent, CoreIntroComponent, CoreWhatComponent, CoreApiComponent, CoreLoginComponent],
  exports: [CoreComponent]
})
export class CoreModule {
}
