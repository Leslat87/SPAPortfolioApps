import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CalculatorRoutingModule } from './calculator-routing.module';
import { MaterialModule } from '../../material/material.module';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
import { CalculatorPageComponent } from './pages/calculator-page/calculator-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';




@NgModule({
  declarations: [
    CalculatorPageComponent,
    HistoryPageComponent,


  ],
  imports: [
    CommonModule,
    MaterialModule,
    CalculatorRoutingModule,
    PrimeNgModule,
    ],
  exports: [
    CalculatorPageComponent,
    HistoryPageComponent,

  ],
})
export class AppCalculatorModule { }
