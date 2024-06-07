import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CrudService } from '../../services/crud.service';
import { Image } from '../../interfaces/crud.interface';
import { Location } from '@angular/common'; // Importamos Location

@Component({
  selector: 'crud-page',
  templateUrl: './crud-page.component.html',
  styleUrls: ['./crud-page.component.css']
})
export class CrudPageComponent implements OnInit {
  public image!: Image;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private crudService: CrudService,
    private location: Location // Inyectamos Location
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

  // Método para volver a la página anterior
  goBack() {
    this.location.back();
  }
}
