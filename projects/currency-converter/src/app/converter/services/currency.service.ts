import { Injectable } from '@angular/core';

import { Currency } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private currencies: Currency[] = [];

  constructor() { }

  private currenciesObj = [
    {"abbreviation": "BRL", "desc": "Brazilian Real"},
    {"abbreviation": "CHF", "desc": "Swiss Franc"},
    {"abbreviation": "EUR", "desc": "Euro"},
    {"abbreviation": "GBP", "desc": "Pound Sterling"},
    {"abbreviation": "USD", "desc": "United States Dollar"},
    {"abbreviation": "VES", "desc": "Venezuelan Bolivar"}
  ]

  listAll(): Currency[] {

    if(this.currencies)
      return this.currencies;

    this.currencies = [];

    for(let currencyObj of this.currenciesObj) {

      let currency: Currency = new Currency();
      Object.assign(currency, currencyObj);
      this.currencies.push(currency);

    }

    return this.currencies;

  }

}
