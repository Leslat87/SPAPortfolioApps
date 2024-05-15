import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalculatorPageComponent } from './pages/calculator-page/calculator-page.component';


// localhost:4200/heroes/
const routes: Routes = [
  { path: '', component: CalculatorPageComponent },

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorRoutingModule { }
