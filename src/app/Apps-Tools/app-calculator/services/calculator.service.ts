// src/app/Apps-Tools/app-calculator/services/calculator.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private history: string[] = [];

  constructor() {
    this.loadHistory();
  }

  addOperation(operation: string) {
    this.history.push(operation);
    this.saveHistory();
  }

  getHistory(): string[] {
    return this.history;
  }

  clearHistory() {
    this.history = [];
    this.saveHistory();
  }

  private saveHistory() {
    localStorage.setItem('calculatorHistory', JSON.stringify(this.history));
  }

  private loadHistory() {
    const savedHistory = localStorage.getItem('calculatorHistory');
    if (savedHistory) {
      this.history = JSON.parse(savedHistory);
    }
  }
}
