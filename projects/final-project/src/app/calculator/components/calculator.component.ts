import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  private number1: string;
  private number2: string;
  private result: number;
  private operation: string;

  constructor(private calcService: CalculatorService) { }

  ngOnInit() {
    this.clear();
  }

  /**
   * Initializes all variables to the default values.
   * 
   * @return void
   */
  clear(): void {
    this.number1 = '0';
    this.number2 = null;
    this.result = null;
    this.operation = null;
  }

  /**
   * Add the selected number to the variable that 
   * will compute the final result.
   * 
   * @param num string
   * @returns void
   */
  addNumber(num: string): void {

    if(this.operation === null) {
      this.number1 = this.concatNumber(this.number1, num);
    } else {
      this.number2 = this.concatNumber(this.number2, num);
    }

  }

  /**
   * Returns the concatnated value.
   * 
   * @param numActual string
   * @param numConcat string
   * @returns string
   */
  concatNumber(numActual: string, numConcat: string): string {

    if(numActual === '0' || numActual === null) {
      numActual = '';
    }

    if(numConcat === '.' && numActual === '') {
      return '0.';
    }

    if (numConcat === '.' && numActual.indexOf('.') > -1) {
      return numActual;
    }

    return numActual + numConcat;

  }

  /**
   * Executes when an operator is selected.
   * If it has already an operator selected,
   * executes the previous one and selects
   * the new operator.
   * 
   * @param operation string
   * @returns void
   */
  setOperation(operation: string): void {

    if(this.operation === null) {
      this.operation = operation;
      return;
    }

    if(this.number2 !== null) {
      this.result = this.calcService.compute(
        parseFloat(this.number1),
        parseFloat(this.number2),
        this.operation
      );
      this.operation = operation;
      this.number1 = this.result.toString();
      this.number2 = null;
      this.result = null;
    }

  }

  /**
   * Computes the final value of an operation.
   * 
   * @returns void
   */
  compute(): void {

    if(this.number2 === null) {
      return;
    }

    this.result = this.calcService.compute(
      parseFloat(this.number1),
      parseFloat(this.number2),
      this.operation
    );

  }

  /**
   * Returns the value to be shown at the calculator
   * display.
   */
  get display(): string {

    if(this.result !==null) {
      return this.result.toString();
    }

    if(this.number2 !== null) {
      return this.number2;
    }

    return this.number1;

  }

}
