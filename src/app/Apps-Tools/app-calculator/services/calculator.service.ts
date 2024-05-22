import { Injectable } from '@angular/core';
import { create, all } from 'mathjs';

export interface Calculation {
  expression: string;
  result: string;
}

const math = create(all);

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private readonly storageKey = 'calculatorHistory';
  private history: Calculation[] = [];

  constructor() {
    this.loadHistory();
  }

  private loadHistory(): void {
    const storedHistory = localStorage.getItem(this.storageKey);
    this.history = storedHistory ? JSON.parse(storedHistory) : [];
  }

  private saveHistory(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.history));
  }

  getHistory(): Calculation[] {
    return this.history;
  }

  addCalculation(calculation: Calculation): void {
    this.history.push(calculation);
    this.saveHistory();
  }

  clearHistory(): void {
    this.history = [];
    localStorage.removeItem(this.storageKey);
  }

  evaluateExpression(expression: string): string {
    try {
      return math.evaluate(expression).toString();
    } catch (error) {
      return 'Error';
    }
  }

  calculate(expression: string): string {
    const result = this.evaluateExpression(expression);
    const calculation: Calculation = { expression, result };
    this.addCalculation(calculation);
    return result;
  }
}
