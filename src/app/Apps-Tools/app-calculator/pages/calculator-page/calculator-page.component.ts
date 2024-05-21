<<<<<<< Updated upstream
import { Component, OnInit} from '@angular/core';
import { ChildActivationEnd } from '@angular/router';
=======
import { Component, OnInit } from '@angular/core';
import { Calculation, CalculatorService } from '../../services/calculator.service';
>>>>>>> Stashed changes

@Component({
  selector: 'shared-home-page',
  templateUrl: './calculator-page.component.html',
<<<<<<< Updated upstream
  styleUrl: './calculator-page.component.css',
})


export class CalculatorPageComponent implements OnInit {


    value: { active: boolean, value: string } = { active: false, value: "0" };
    result: string = "0";
    dialog: boolean = false;
    history: string[] = [];

    THEME: string = "";
    AC: string = "AC";
    D: string = "D";
    EQUALS: string = "=";
    ZERO: string = "0";

    operationSign = "+-x÷";
    multiplicationDivision = "x÷";
    additionSubstraction = "+-";
    numbers: string = "0123456789";

    buttons: string[][] = [
      [this.AC, this.D, "%", "÷"],
      ["7", "8", "9", "x"],
      ["4", "5", "6", "-"],
      ["1", "2", "3", "+"],
      [this.THEME, this.ZERO, ",", this.EQUALS]
    ]



    constructor() { }

    ngOnInit(): void {
      const storedHistory = localStorage.getItem('operationHistory');
      if (storedHistory) {
          this.history = JSON.parse(storedHistory);
      }
    }

    click(button: string) {
      switch (button) {
        case this.AC:
          this.result = this.ZERO;
          this.value.active = false;
          break;
        case this.D:
          this.delete();
          break;
        case this.EQUALS:
          this.equalsButton();
           // Agregar la operación completa al historial
           this.history.push(this.result + '=' + this.value.value);
           localStorage.setItem('operationHistory', JSON.stringify(this.history));
          break;
        case "%":
          this.percent();
          break;
          case ",":
            if (!this.result.includes(".")) { // Verificar si ya hay un punto decimal
                this.result += ".";
            }
          break;
        default:
          this.operation(button);
          break;
      }
      if (!this.operationSign.includes(button) && button !== this.AC && button !== this.D && button !== this.EQUALS && button !== "%" && button !== ",") {

    }
    }
    equalsButton() {
      if (this.result == this.ZERO) return;
      this.value.active = true
      this.value.value = this.calculate(this.result);
    }

    delete() {
      if (this.result.length > 0 && this.result !== this.ZERO) {
        this.result = this.result.substring(0, this.result.length - 1);
        if (this.result.length == 0)
          this.result = this.ZERO;
        this.value.active = false;
      }
    }
    operation(button: string) {
      if (this.value.active && this.operationSign.includes(button)) {
        this.result = this.value.value;
        this.value.active = false;
      }
      if (this.value.active && !this.operationSign.includes(button)) {
        this.result = this.ZERO
        this.value.active = false;
      }

      if (this.result == this.ZERO) {
        if (this.operationSign.includes(button) && !this.additionSubstraction.includes(button)) return;
        this.result = button;
      } else {
        if (this.operationSign.includes(this.result[this.result.length - 1])) {
          if (this.operationSign.includes(button)) {
            this.result = this.result.substring(0, this.result.length - 1) + button;
            return;
          }
        }
        this.result = this.result + button
      }
    }



    percent() {
      if(this.value.active){
        this.result = String(Number(this.value.value) / 100)
        this.value.active = false;
        return;
      }

      let value: null | number = null;
      let number = 0;
      if (this.operationSign.includes(this.result[this.result.length - 1])) {
        return;
      }
      for (let i = this.result.length - 1; i > 0; i--) {
        if (this.operationSign.includes(this.result[i])) {
          value = i;
          break;
        }
      }
      if (value != null) {
        number = Number(this.result.substring(value + 1, this.result.length))
        this.result = this.result.substring(0, value + 1) + String(number / 100)
      } else {
        number = Number(this.result)
        this.result = String(number / 100);
      }
    }
    buttonColor(button: string): string {
      if (!this.numbers.includes(button)) {
        switch (button) {
          case ",":
            return "";
          case this.EQUALS:
            return "equal-sign-button"
          default:
            return "other-button";
        }
      }
      return "";
    }
    calculate(resultValue: string) {
      var calculated = false;
      let value = 0;
      let contain = false;

      for (let i = 0; i < resultValue.length; i++) {
        if(this.operationSign.includes(resultValue[i])){
          contain = true;
          break;
        }
      }
      if(!contain){
        return resultValue;
      }
      let array = this.operationSignFind(resultValue);
      while (!calculated) {
        console.log(array)
        if (this.multiplicationDivision.includes(array[1])) {
          value = this.process(array[0], array[1], array[2])
          array.splice(0, 3, String(value));
        } else {
          if (this.multiplicationDivision.includes(array[3])) {
            value = this.process(array[2], array[3], array[4])
            array.splice(2, 3, String(value));
          } else {
            value = this.process(array[0], array[1], array[2])
            array.splice(0, 3, String(value));
          }
        }
        if (!this.operationSign.includes(array[1])) {
          calculated = true;
        }
      }
      return array[0];
    }

    operationSignFind(resultValue: string) {
      let array: string[] = [];
      let endValue = 0;
      for (let i = 1; i < resultValue.length; i++) {
        if (this.operationSign.includes(resultValue[i])) {
          array[array.length] = (resultValue.substring(endValue == 0 ? endValue : endValue + 1, i))
          endValue = i;
          array[array.length] = (resultValue[i])
        }
      }
      array[array.length] = resultValue.substring(endValue + 1, resultValue.length)
      return array;
    }

    process(firstNumber: string, operation: string, secondNumber: string): number {
      switch (operation) {
        case "x":
          return Number(firstNumber) * Number(secondNumber);
        case "÷":
          return Number(firstNumber) / Number(secondNumber);
        case "+":
          return Number(firstNumber) + Number(secondNumber);
        case "-":
          return Number(firstNumber) - Number(secondNumber);
        default:
          return 0;
      }
    }

=======
  styleUrls: ['./calculator-page.component.css']
})
export class CalculatorPageComponent implements OnInit {
  display: string = '';
  history: Calculation[] = [];

  constructor(private calculatorService: CalculatorService) {}

  ngOnInit(): void {
    this.history = this.calculatorService.getHistory();
  }

  append(value: string) {
    this.display += value;
  }

  clear() {
    this.display = '';
  }

  delete() {
    this.display = this.display.slice(0, -1);
  }

  calculate() {
    const result = this.calculatorService.evaluateExpression(this.display);
    const calculation: Calculation = {
      expression: this.display,
      result: result
    };
    this.calculatorService.addCalculation(calculation);
    this.history = this.calculatorService.getHistory();
    this.display = result;
  }

  clearHistory() {
    this.calculatorService.clearHistory();
    this.history = [];
>>>>>>> Stashed changes
  }
