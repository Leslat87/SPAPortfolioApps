import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalculatorPageComponent } from './pages/calculator-page/calculator-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';

// localhost:4200/heroes/
const routes: Routes = [
  {
    path: '',
    component: CalculatorPageComponent,
  },
  { path: 'history',
    component: HistoryPageComponent
  },

      //TODO: aqui esta la posibilidad de añadir mas funciones a la calculadora
      // { path: 'edit/:id', component: NewPageComponent },
      // { path: 'list', component: ListPageComponent },
      // { path: ':id', component: CrudPageComponent },
      // { path: '**', redirectTo: 'list' },
    ]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorRoutingModule { }
