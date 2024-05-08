import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { Image } from '../../interfaces/crud.interface';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-crud-page',
  templateUrl: './crud-page.component.html',
  styles: ``,
})
export class CrudPageComponent implements OnInit {

  public image?: Image;

  constructor(
    private crudService: CrudService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}


  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id})  => this.crudService.getImageById(id)),
    )
    .subscribe( image => {
      if(!image) return this.router.navigate([ '/images.list']);

      this.image = image;

      return;
      })

  }

  goBack(): void {
    this.router.navigateByUrl('images/list');
}
}
