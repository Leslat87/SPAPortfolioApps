import { Injectable } from '@angular/core';
import { create, all } from 'mathjs';

const math = create(all);

export interface Calculation {
  id: number;
  expression: string;
  result: string;
}

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private storageKeyPrefix = 'calculatorHistory_';

  constructor() {}

  private getStorageKey(userId: string): string {
    return `${this.storageKeyPrefix}${userId}`;
  }

  getUserHistory(userId: string): Calculation[] {
    const storedHistory = localStorage.getItem(this.getStorageKey(userId));
    return storedHistory ? JSON.parse(storedHistory) : [];
  }

  addUserCalculation(userId: string, calculation: Calculation): void {
    const history = this.getUserHistory(userId);
    history.push(calculation);
    localStorage.setItem(this.getStorageKey(userId), JSON.stringify(history));
  }

  clearUserHistory(userId: string): void {
    localStorage.removeItem(this.getStorageKey(userId));
  }

  evaluateExpression(expression: string): string {
    try {
      return math.evaluate(expression).toString();
    } catch (error) {
      return 'Error';
    }
  }

  calculate(userId: string, expression: string): string {
    const result = this.evaluateExpression(expression);
    const calculation: Calculation = { id: Date.now(), expression, result };
    this.addUserCalculation(userId, calculation);
    return result;
  }
}
