// src/app/Apps-Tools/app-calculator/calculator-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorPageComponent } from './pages/calculator-page/calculator-page.component';

const routes: Routes = [
  { path: '', component: CalculatorPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppCalculatorRoutingModule { }
