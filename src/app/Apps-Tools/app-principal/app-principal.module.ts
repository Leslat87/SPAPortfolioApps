import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PrincipalPageRoutingModule } from './principalpage-routing.module';
import { PrincipalPageComponent } from './components/principal-page/principal-page.component';
import { SharedModule } from '../../shared/shared.module';





@NgModule({
  declarations: [
    PrincipalPageComponent,
  ],
    imports: [
      CommonModule,
      PrincipalPageRoutingModule,

      SharedModule,

    ],
    exports: [
       PrincipalPageComponent,
    ],
    providers: [],
})
export class AppPrincipalModule { }
