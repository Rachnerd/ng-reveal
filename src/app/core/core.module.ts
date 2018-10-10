import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core/core.component';
import { CoreIntroComponent } from './core-intro/core-intro.component';
import { RevealModule } from '../reveal/reveal.module';
import { CoreWhatComponent } from './core-what/core-what.component';
import { CoreApiComponent } from './core-api/core-api.component';
import { CoreFeaturesComponent } from './core-features/core-features.component';
import { CoreModuleComponent } from './core-module/core-module.component';

@NgModule({
  imports: [
    CommonModule,
    RevealModule
  ],
  declarations: [CoreComponent, CoreIntroComponent, CoreWhatComponent, CoreApiComponent, CoreFeaturesComponent, CoreModuleComponent],
  exports: [CoreComponent]
})
export class CoreModule {
}
