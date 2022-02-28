import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { ConvertResponse, Convert } from '../models';
import { ConverterService } from '../services';

@Component({
  selector: 'modal-rate',
  templateUrl: './modal-rate.component.html',
  styleUrls: ['./modal-rate.component.css']
})
export class ModalRateComponent implements OnInit {

  @Input() id: string;
  @Input() response: ConvertResponse;
  @Input() convert: Convert = new Convert();
  @Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();

  constructor(private converterService: ConverterService) { }

  ngOnInit(): void {
  }

  newQueryy() {
    this.onConfirm.emit();
    console.log("asd");
  }

  get valueConverted(): string {
    if(this.response === undefined)
      return '0';

    return (this.convert.amount * this.response.rates[this.convert.currencyTo]).toFixed(2);

  }

  get rateTo(): number {
    return this.converterService.ratesTo(this.response, this.convert);
  }

  get rateFrom(): string {
    return this.converterService.ratesFrom(this.response, this.convert);
  }

  get rateDate(): string {
    return this.converterService.ratesDate(this.response);
  }

}
