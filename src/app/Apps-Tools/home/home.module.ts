import { NgModule } from '@angular/core';
import { PrincipalPageRoutingModule } from './home-routing.module';

import { MaterialModule } from '../../material/material.module';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
import { SharedModule } from '../../shared/shared.module';
import { HomePageComponent } from './pages/home-page/home-page.component';





@NgModule({
    imports: [
        PrincipalPageRoutingModule,
        MaterialModule,
        PrimeNgModule,
        SharedModule,
    ],
    exports: [
        HomePageComponent,

    ],
    declarations: [
        HomePageComponent,

    ],
    providers: [],
})
export class HomePageModule { }
