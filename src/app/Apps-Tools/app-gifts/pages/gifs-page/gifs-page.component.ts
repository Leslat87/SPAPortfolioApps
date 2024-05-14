import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './gifs-page.component.html'
})
export class GifsPageComponent {

  constructor( private gifsService: GifsService ) {}

  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }

}
