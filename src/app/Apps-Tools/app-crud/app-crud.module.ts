
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CrudRoutingModule } from './crud-routing.module';
import { MaterialModule } from './../../material/material.module';



import { CardComponent } from './components/card/card.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CrudPageComponent } from './pages/crud-page/images-page.component';
import { CrudImagePipe } from './pipes/crud-image.pipe';





@NgModule({
  declarations: [
    CardComponent,
    ConfirmDialogComponent,
    CrudPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,

    CrudImagePipe,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CrudRoutingModule,
    MaterialModule,
    PrimeNgModule,
    

  ],
  exports: [
    CardComponent,
    ConfirmDialogComponent,
    ListPageComponent,
    SearchPageComponent,
    NewPageComponent,
    LayoutPageComponent,
    CrudPageComponent,

    CrudImagePipe,

  ]
})
export class AppCrudModule { }
