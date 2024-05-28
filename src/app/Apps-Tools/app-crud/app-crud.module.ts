
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CrudRoutingModule } from './crud-routing.module';


import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { CrudImagePipe } from '../pipes/crud-image.pipe';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';


import { CrudPageComponent } from './pages/crud-page/crud-page.component';
import { CardComponent } from './components/card/card.component';
import { CrudService } from './services/crud.service';





@NgModule({
  declarations: [
    CardComponent,
    ConfirmDialogComponent,
    ListPageComponent,
    SearchPageComponent,
    NewPageComponent,
    CrudPageComponent,
    CrudImagePipe,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CrudRoutingModule,
    FormsModule,



  ],
  exports: [
    CardComponent,
    ConfirmDialogComponent,
    ListPageComponent,
    SearchPageComponent,
    NewPageComponent,
    CrudPageComponent,
    CrudImagePipe,

  ],
  providers: [
    CrudService
  ]
})
export class AppCrudModule { }
