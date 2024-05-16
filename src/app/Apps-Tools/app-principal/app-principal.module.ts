import { NgModule } from '@angular/core';


import { MaterialModule } from '../../material/material.module';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
import { CommonModule } from '@angular/common';

import { PrincipalPageRoutingModule } from './principalpage-routing.module'
import { PrincipalPageComponent } from './components/principal-page/principal-page.component';




@NgModule({
  declarations: [
    PrincipalPageComponent,
  ],
    imports: [
      CommonModule,
      PrincipalPageRoutingModule,
      MaterialModule,
      PrimeNgModule,

    ],
    exports: [
       PrincipalPageComponent,
    ],
    providers: [],
})
export class AppPrincipalModule { }
