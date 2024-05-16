import { Component, OnInit } from '@angular/core';
import { Image } from '../../interfaces/crud.interface';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'crud-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.scss',
})
export class ListPageComponent implements OnInit {

  public images: Image[] = [];

  constructor( private crudService: CrudService ) {}

  ngOnInit(): void {
    this.crudService.getImages()
      .subscribe( images => this.images = images );
  }

}
