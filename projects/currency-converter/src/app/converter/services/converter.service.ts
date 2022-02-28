import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Convert, ConvertResponse } from '../models';

@Injectable()
export class ConverterService {

  private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=eba7130a5b2d720ce43eb5fcddd47cc3";

  constructor(private http: HttpClient) {}

  /**
   * Perform a call to the API
   *
   * @param Convert convert
   * @returns Observable<ConvertResponse>
   */
  convert(convert: Convert): Observable<any> {
    let params = `&base=${convert.currencyFrom}&symbols=${convert.currencyTo}`;
    return this.http.get(this.BASE_URL + params);
  }

  /**
   * Returns the "TO" rate given a response
   *
   * @param ConvertResponse response
   * @param Convert convert
   * @returns number
   */
  ratesTo(response: ConvertResponse, convert: Convert): number {
    
    if (response === undefined)
      return 0;

    return response.rates[convert.currencyTo];

  }

  /**
   * Returns the "FROM" rates given a response
   *
   * @param ConvertResponse response
   * @param Convert convert
   * @returns string
   */
  ratesFrom(response: ConvertResponse, convert: Convert): string {
    
    if (response === undefined)
      return '0';

    return (1 / response.rates[convert.currencyFrom]).toFixed(4);
  
  }

  /**
   * Returns the rate date given a response
   *
   * @param ConvertResponse response
   * @returns string
   */
  dataCotacao(response: ConvertResponse): string {

    if (response === undefined)
      return '';
    
    return response.date;

  }

}
