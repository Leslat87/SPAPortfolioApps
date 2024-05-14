import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../../Apps-Tools/app-gifts/services/gifs.service';


@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  sections = ['Section 1', 'Section 2', 'Section 3', 'Section 4'];

  // private gifsService
  constructor( private gifsService: GifsService  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  get tags(): string[] {
    return this.gifsService.tagsHistory;
  }

  searchTag( tag: string ):void {
    this.gifsService.searchTag( tag );
  }

}


