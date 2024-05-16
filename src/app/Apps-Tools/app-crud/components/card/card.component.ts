// src/app/Apps-Tools/app-crud/components/card/card.component.ts
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from '../../interfaces/crud.interface';

@Component({
  selector: 'images-crud-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() image!: Image;

  constructor(private router: Router) {}

  get imageUrl(): string {
    return this.image.alt_img || `assets/images/${this.image.id}.jpg`;
  }

  truncateText(text: string, limit: number): string {
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  }

  navigateToDetails(): void {
    this.router.navigate(['/crud', this.image.id]);
  }
}
