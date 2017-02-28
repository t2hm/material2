import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdSelect} from './select';
import {MdSelectLabel} from './select-label';
import {MdOptionModule} from '../core/option/option';
import {
  CompatibilityModule,
  OverlayModule,
} from '../core';
export * from './select';
export * from './select-label';
export {fadeInContent, transformPanel, transformPlaceholder} from './select-animations';


@NgModule({
  imports: [CommonModule, OverlayModule, MdOptionModule, CompatibilityModule],
  exports: [MdSelect, MdSelectLabel, MdOptionModule, CompatibilityModule],
  declarations: [MdSelect, MdSelectLabel],
})
export class MdSelectModule {
  /** @deprecated */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MdSelectModule,
      providers: []
    };
  }
}
