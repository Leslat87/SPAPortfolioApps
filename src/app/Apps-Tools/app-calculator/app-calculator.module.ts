import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AppCalculatorRoutingModule } from './calculator-routing.module';
import { MaterialModule } from '../../material/material.module';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
import { CalculatorPageComponent } from './pages/calculator-page/calculator-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CalculatorService } from './services/calculator.service';




@NgModule({
  declarations: [
    CalculatorPageComponent,
    HistoryPageComponent,


  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppCalculatorRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule,
    ],
  exports: [
    CalculatorPageComponent,
    HistoryPageComponent,
  ],
  providers: [
    CalculatorService
  ]
})
export class AppCalculatorModule { }
