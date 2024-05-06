import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CrudRoutingModule } from './crud-routing.module';
import { MaterialModule } from '../material/material.module';


import { CardComponent } from './components/card/card.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { CrudImagePipe } from './pipes/crud-image.pipe';
import { CrudPageComponent } from './pages/crud-page/crud-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';




@NgModule({
  declarations: [
    CardComponent,
    ConfirmDialogComponent,
    CrudPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    SearchPageComponent,
    NewPageComponent,

    //
    CrudImagePipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CrudRoutingModule,
    MaterialModule,
  ]
})
export class AppCrudModule { }
