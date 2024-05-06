import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorPageComponent } from './pages/calculator-page/calculator-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';



@NgModule({
  declarations: [
    CalculatorPageComponent,
    HistoryPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppCalculatorModule { }
