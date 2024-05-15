import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CalculatorRoutingModule } from './calculator-routing.module';
import { MaterialModule } from '../../material/material.module';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
import { CalculatorPageComponent } from './pages/calculator-page/calculator-page.component';

import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    CalculatorPageComponent,



  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    CalculatorRoutingModule,
    PrimeNgModule,
    ],
  exports: [
    CalculatorPageComponent,
 

  ],
})
export class AppCalculatorModule { }
