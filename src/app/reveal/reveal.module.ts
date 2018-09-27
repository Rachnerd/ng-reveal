import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FragmentDirective } from './fragment.directive';
import { SlideDirective } from './slide.directive';
import { REVEAL_CONFIG } from './reveal.config';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FragmentDirective,
    SlideDirective
  ],
  exports: [
    FragmentDirective,
    SlideDirective
  ]
})
export class RevealModule {
  static forRoot(revealConfig): ModuleWithProviders {
    return {
      ngModule: RevealModule,
      providers: [
        {
          provide: REVEAL_CONFIG,
          useValue: revealConfig
        }
      ]
    };
  }
}
