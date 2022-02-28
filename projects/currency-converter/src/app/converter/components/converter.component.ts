import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Currency, Convert, ConvertResponse } from '../models';
import { CurrencyService, ConverterService } from '../services';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  currencies: Currency[];
  convert: Convert;
  hasError: boolean;
  response: ConvertResponse;

  @ViewChild("convertForm", { static: true }) convertForm: NgForm;

  constructor(private currencyService: CurrencyService, private converterService: ConverterService) { }

  ngOnInit(): void {
    this.currencies = this.currencyService.listAll();
    this.startup();
  }

  /**
   * Call to the value convertion
   * 
   * @returns void
   */
  startup(): void {
    this.convert = new Convert('EUR', 'USD', null);
    this.hasError = false;
  }

  convertion(): void {

    if(this.convertForm.form.valid)
      alert('Converting: ' + JSON.stringify(this.convert));
  
  }

}
