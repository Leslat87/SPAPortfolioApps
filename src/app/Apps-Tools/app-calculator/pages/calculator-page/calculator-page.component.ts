import { Component } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator-page.component.html',
  styleUrls: ['./calculator-page.component.scss']
})
export class CalculatorPageComponent {
  currentInput: string = '';
  currentResult: string = '0';

  constructor(private calculatorService: CalculatorService) {
    
  }

  appendCharacter(char: string) {
    this.currentInput += char;
  }

  clearInput() {
    this.currentInput = '';
    this.currentResult = '0';
  }

  calculateResult() {
    try {
      this.currentResult = this.safeEval(this.currentInput);
      this.calculatorService.addOperation(`${this.currentInput} = ${this.currentResult}`);
      this.currentInput = '';
    } catch (e) {
      this.currentResult = 'Error';
    }
  }
  clearHistory() {
    this.calculatorService.clearHistory();
  }



  safeEval(expression: string): string {
    // Solo permite caracteres válidos en la expresión matemática
    const allowedCharacters = /^[0-9+\-*/().\s]+$/;
    if (!allowedCharacters.test(expression)) {
      throw new Error('Invalid expression');
    }

    // Evalúa la expresión matemáticamente de manera segura
    try {
      // Usar `Function` en lugar de `eval` para evaluar la expresión
      return Function(`'use strict'; return (${expression})`)().toString();
    } catch {
      throw new Error('Invalid expression');
    }
  }
}
