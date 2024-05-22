import { Component, OnInit } from '@angular/core';
import { Calculation, CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator-page.component.html',
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
    const result = this.calculatorService.calculate(this.display);
    this.history = this.calculatorService.getHistory();
    this.display = result;
  }

  clearHistory() {
    this.history = [];
  }
}
