import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator-page',
  templateUrl: './calculator-page.component.html',
  styleUrls: ['./calculator-page.component.scss']
})
export class CalculatorPageComponent {
  display: string = '';
  history: string[] = [];

  onButtonClick(value: string): void {
    if (value === 'C') {
      this.clearDisplay();
    } else if (value === '=') {
      this.evaluateExpression();
    } else if (value === 'del') {
      this.deleteLastCharacter();
    } else if (value === 'reset') {
      this.resetCalculator();
    } else {
      this.addToDisplay(value);
    }
  }

  private clearDisplay(): void {
    this.display = '';
  }

  private evaluateExpression(): void {
    try {
      const result = this.evaluate(this.display);
      if (result !== null) {
        this.history.push(`${this.display} = ${result}`);
        this.display = result.toString();
      } else {
        this.display = 'Error: Expresión inválida';
      }
    } catch (e) {
      this.display = 'Error';
    }
  }

  private deleteLastCharacter(): void {
    if (this.display.length > 0) {
      this.display = this.display.slice(0, -1);
    }
  }

  private resetCalculator(): void {
    this.clearDisplay();
    
  }

  private addToDisplay(value: string): void {
    this.display += value;
  }

  private evaluate(expression: string): number | null {
    try {
      const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, '');
      const result = Function(`'use strict'; return (${sanitizedExpression})`)();
      return typeof result === 'number' && !isNaN(result) ? result : null;
    } catch (error) {
      console.error('Error evaluating expression:', error);
      return null;
    }
  }

  clearHistory(): void {
    this.history = [];
  }
}
