import { Component } from '@angular/core';
import { GifsService } from '../../../Apps-Tools/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {


  // private gifsService
  constructor( private gifsService: GifsService  ) {}

  get tags(): string[] {
    return this.gifsService.tagsHistory;
  }

  searchTag( tag: string ):void {
    this.gifsService.searchTag( tag );
  }

}


