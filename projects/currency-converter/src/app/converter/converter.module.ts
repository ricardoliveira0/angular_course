import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ConverterComponent } from './components';
import { CurrencyService, ConverterService } from './services';
import { NumbersDirective } from './directives';
import { ModalRateComponent } from './utils';



@NgModule({
  declarations: [
    ConverterComponent,
    NumbersDirective,
    ModalRateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    ConverterComponent
  ],
  providers: [
    CurrencyService,
    ConverterService
  ]
})
export class ConverterModule { }
