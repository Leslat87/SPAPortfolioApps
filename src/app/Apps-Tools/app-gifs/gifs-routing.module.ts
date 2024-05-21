import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifsPageComponent } from './pages/gifs-page/gifs-page.component';



// localhost:4200/heroes/
const routes: Routes = [
  { path: '', component: GifsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GifsRoutingModule { }
