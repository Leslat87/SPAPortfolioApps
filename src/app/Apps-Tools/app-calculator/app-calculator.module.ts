import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CalculatorRoutingModule } from './calculator-routing.module';
import { MaterialModule } from '../../material/material.module';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';

import { HistoryPageComponent } from './pages/history-page/history-page.component';
<<<<<<< Updated upstream
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorService } from './services/calculator.service';
import { CalculatorPageComponent } from './pages/calculator-page/calculator-page.component';
>>>>>>> Stashed changes




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
<<<<<<< Updated upstream
=======
    ReactiveFormsModule,
    FormsModule,
>>>>>>> Stashed changes
    ],
  exports: [
    CalculatorPageComponent,
    HistoryPageComponent,

  ],
})
export class AppCalculatorModule { }
