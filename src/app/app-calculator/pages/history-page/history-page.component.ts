import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-history',
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css',
})
export class HistoryPageComponent implements OnInit {



  history: string[] = []

  constructor() {}
  ngOnInit(): void {
    // Obtener el historial de operaciones del localStorage al inicializar el componente
    const storedHistory = localStorage.getItem('operationHistory');
    if (storedHistory) {
        this.history = JSON.parse(storedHistory);
  }
}

  clearHistory(): void {
    localStorage.removeItem('operationHistory');
    this.history = [];
  }


}
