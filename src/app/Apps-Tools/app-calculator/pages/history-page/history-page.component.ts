import { Component, OnInit } from '@angular/core';
import { CalculatorService, Calculation } from '../../services/calculator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  history: Calculation[] = [];
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

  clearHistory(): void {
    this.calculatorService.clearUserHistory(this.userId);
    this.history = [];
  }
}
