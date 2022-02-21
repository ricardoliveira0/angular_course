/**
 * Service responsible to execute all calculator
 * operations. 
 * 
 * @author Ricardo Oliveira<ricardooliveira@optiply.nl>
 * @since v1.0
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  static readonly ADDITION: string = "+";
  static readonly SUBTRACTION: string = "-";
  static readonly MULTIPLICATION: string = "*";
  static readonly DIVISION: string = "/";

  constructor() { }

  /**
   * Method that computes an arithmetic operation
   * given two numbers. Supports addition, subtraction,
   * multiplication and division.
   * 
   * @param num1 number
   * @param num2 number
   * @param operation string Operation to be executed
   * @returns number Operation result
   */
  compute(num1: number, num2: number, operation: string): number { 

    let result: number; // stores the operation result

    switch(operation) {

      case CalculatorService.ADDITION:
        result = num1 + num2;
        break;

      case CalculatorService.SUBTRACTION:
        result = num1 - num2;
        break;

      case CalculatorService.MULTIPLICATION:
        result = num1 * num2;
        break;

      case CalculatorService.DIVISION:
        result = num1 / num2;
        break;

      default:
        result = 0;

    }

    return result;

  }

}
