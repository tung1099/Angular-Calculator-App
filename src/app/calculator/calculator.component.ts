import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  currentNumber = '0';
  firstOperand = null;
  operator = null;
  waitForSecondNumber = false;

  constructor() { }

  ngOnInit() {
  }

  public getNumber(v: string) {
    console.log(v);
    if (this.waitForSecondNumber) {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    } else {
      this.currentNumber === '0' ? this.currentNumber = v : this.currentNumber += v;

    }
  }

  getDecimal() {
    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }
  }

  private doCalculation(op: any , secondOp: any) {
    switch (op) {
      case '+':
        return this.firstOperand += secondOp;
      case '-':
        // @ts-ignore
        return this.firstOperand -= secondOp;
      case '*':
        // @ts-ignore
        return this.firstOperand *= secondOp;
      case '/':
        // @ts-ignore
        return this.firstOperand /= secondOp;
      case '=':
        return secondOp;
    }
  }
  public getOperation(op: string) {
    console.log(op);

    if (this.firstOperand === null) {
      // @ts-ignore
      this.firstOperand = Number(this.currentNumber);

    } else if (this.operator) {
      const result = this.doCalculation(this.operator , Number(this.currentNumber));
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    // @ts-ignore
    this.operator = op;
    this.waitForSecondNumber = true;

    console.log(this.firstOperand);

  }

  public clear() {
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }

}
