import { Component, OnInit } from '@angular/core';
import { CalculatorService, Calculation } from '../../services/calculator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calculator-page',
  templateUrl: './calculator-page.component.html',
  styleUrls: ['./calculator-page.component.css']
})
export class CalculatorPageComponent implements OnInit {
  history: Calculation[] = [];
  display: string = '';
  userId: string = '';

  constructor(
    private calculatorService: CalculatorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id') || '';
    this.loadHistory();
  }

  loadHistory(): void {
    this.history = this.calculatorService.getUserHistory(this.userId);
  }

  calculate(): void {
    const result = this.calculatorService.calculate(this.userId, this.display);
    this.display = result;
    this.loadHistory();
  }

  clearHistory(): void {
    this.calculatorService.clearUserHistory(this.userId);
    this.history = [];
  }

  clear(): void {
    this.display = '';
  }

  delete(): void {
    this.display = this.display.slice(0, -1);
  }

  append(value: string): void {
    this.display += value;
  }
}
