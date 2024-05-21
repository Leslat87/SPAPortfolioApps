import { Component, OnInit } from '@angular/core';
import { CalculatorService, Calculation } from '../../services/calculator.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit {
  history: Calculation[] = [];

  constructor(private calculatorService: CalculatorService) {}

  ngOnInit(): void {
    this.history = this.calculatorService.getHistory();
  }

  clearHistory(): void {
    this.calculatorService.clearHistory();
    this.history = [];
  }
}
