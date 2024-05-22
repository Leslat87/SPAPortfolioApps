import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { Image } from '../../interfaces/crud.interface';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  public images: Image[] = [];
  public filteredImages: Image[] = [];
  public uniqueTags: string[] = [];
  public searchTerm: string = '';

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.getImages().subscribe(images => {
      this.images = images;
      this.uniqueTags = this.getUniqueTags(images);
    });
  }

  getUniqueTags(images: Image[]): string[] {
    const tags = images.flatMap(image => image.tags.split(','));
    return Array.from(new Set(tags.map(tag => tag.trim())));
  }

  onSearch(): void {
    this.filteredImages = this.images.filter(image =>
      image.tags.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onTagClick(tag: string): void {
    this.searchTerm = tag;
    this.onSearch();
  }
}
