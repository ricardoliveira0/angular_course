import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ConverterComponent } from './components';
import { CurrencyService, ConverterService } from './services';
import { NumbersDirective } from './directives';



@NgModule({
  declarations: [
    ConverterComponent,
    NumbersDirective
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
