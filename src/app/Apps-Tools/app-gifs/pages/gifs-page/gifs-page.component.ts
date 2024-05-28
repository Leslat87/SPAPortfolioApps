import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './gifs-page.component.html',
  styleUrls: ['./gifs-page.component.css']
})
export class GifsPageComponent {
  constructor(public gifsService: GifsService) {}

  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }

  searchGifs(term: string) {
    this.gifsService.searchTag(term);
  }
}
