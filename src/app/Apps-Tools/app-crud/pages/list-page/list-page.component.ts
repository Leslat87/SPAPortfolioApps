import { Component, OnInit } from '@angular/core';
import { Image } from '../../interfaces/crud.interface';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'crud-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  public images: Image[] = [];
  public filteredImages: Image[] = [];
  public searchTag: string = '';

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    this.crudService.getImages()
      .subscribe(images => {
        this.images = images;
        this.filteredImages = images; // Inicialmente, todas las imágenes son las filtradas
      });
  }

  filterImagesByTag(): void {
    if (this.searchTag.trim() === '') {
      this.filteredImages = this.images;
    } else {
      this.filteredImages = this.images.filter(image =>
        image.tags.toLowerCase().includes(this.searchTag.toLowerCase())
      );
    }
  }
}
