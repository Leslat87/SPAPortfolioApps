import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { CalculatorPageComponent } from './pages/calculator-page/calculator-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CalculatorRoutingModule } from './calculator-routing.module';




@NgModule({
  declarations: [
    CalculatorPageComponent,
    HistoryPageComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CalculatorRoutingModule,
    ]
})
export class AppCalculatorModule { }
