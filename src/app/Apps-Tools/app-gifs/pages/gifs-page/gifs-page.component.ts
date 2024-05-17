import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './gifs-page.component.html',
  styleUrls: ['./gifs-page.component.scss']
})
export class GifsPageComponent {

  constructor( private gifsService: GifsService ) {}

  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }

}
