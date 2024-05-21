import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream

@Component({
  selector: 'shared-history',
=======
import { CalculatorService, Calculation } from '../../services/calculator.service';

@Component({
  selector: 'app-history-page',
>>>>>>> Stashed changes
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css',
})
export class HistoryPageComponent implements OnInit {
<<<<<<< Updated upstream



  history: string[] = []

  constructor() {}
  ngOnInit(): void {
    // Obtener el historial de operaciones del localStorage al inicializar el componente
    const storedHistory = localStorage.getItem('operationHistory');
    if (storedHistory) {
        this.history = JSON.parse(storedHistory);
=======
  history: Calculation[] = [];

  constructor(private calculatorService: CalculatorService) {}

  ngOnInit(): void {
    this.history = this.calculatorService.getHistory();
  }

  clearHistory(): void {
    this.calculatorService.clearHistory();
    this.history = [];
>>>>>>> Stashed changes
  }
}

  clearHistory(): void {
    localStorage.removeItem('operationHistory');
    this.history = [];
  }


}
