import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConverterComponent } from './components';



@NgModule({
  declarations: [
    ConverterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ConverterComponent
  ]
})
export class ConverterModule { }
