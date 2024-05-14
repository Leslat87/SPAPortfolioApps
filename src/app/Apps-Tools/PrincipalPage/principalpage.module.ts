import { NgModule } from '@angular/core';
import { PrincipalPageComponent } from '../PrincipalPage/components/principalpage/principalpage.component';
import { PrincipalPageRoutingModule } from '../home/home-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material/material.module';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';




@NgModule({
    imports: [
      PrincipalPageRoutingModule,
      MaterialModule,
      PrimeNgModule,


    ],
    exports: [
       PrincipalPageComponent,
    ],
    declarations: [
      PrincipalPageComponent
    ],
    providers: [],
})
export class PrincipalPageModule { }
