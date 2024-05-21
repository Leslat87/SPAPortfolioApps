// src/app/Apps-Tools/app-crud/pages/crud-page/crud-page.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CrudService } from '../../services/crud.service';
import { Image } from '../../interfaces/crud.interface';

@Component({
  selector: 'crud-page',
  templateUrl: './crud-page.component.html',
  styleUrls: ['./crud-page.component.scss']
})
export class CrudPageComponent implements OnInit {
  public image!: Image;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private crudService: CrudService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap(params => this.crudService.getImageById(params['id']))
      )
      .subscribe(image => {
        if (image) {
          this.image = image;
        } else {
          this.router.navigate(['/crud/list']);
        }
      });
  }

  get imageUrl(): string {
    return this.image.alt_img || `assets/images/${this.image.id}.jpg`;
  }
}
