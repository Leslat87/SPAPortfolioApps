// src/app/Apps-Tools/app-calculator/components/history/history.component.ts
import { Component } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-history',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent {
  history: string[] = [];

  constructor(private calculatorService: CalculatorService) {
    this.history = this.calculatorService.getHistory();
  }

  clearHistory() {
    this.calculatorService.clearHistory();
    this.history = [];
  }
}
