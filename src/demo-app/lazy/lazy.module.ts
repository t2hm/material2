import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { LazyComponent }   from './lazy.component';
import { routing } from './lazy.routing';

@NgModule({
  imports: [CommonModule, routing, MaterialModule.forRoot()],
  declarations: [LazyComponent]
})
export class LazyModule {}
