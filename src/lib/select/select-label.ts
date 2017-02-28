import {Directive} from '@angular/core';

/**
 * Allows the user to customize the label that is displayed `md-select` has a value.
 */
@Directive({
  selector: 'md-select-label, mat-select-label'
})
export class MdSelectLabel { }
