import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Image } from '../../interfaces/crud.interface';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'crud-search-page',
  templateUrl: './search-page.component.html',
  styles: [
  ]
})
export class SearchPageComponent {

  public searchInput = new FormControl('');
  public images: Image[] = [];
  public selectedImages?: Image;

  constructor( private crudService: CrudService ){}

  searchImage() {
    const value: string = this.searchInput.value || '';

    this.crudService.getSuggestions( value )
      .subscribe( images => this.images = images );
  }


  onSelectedOption( event: MatAutocompleteSelectedEvent ): void {
    if ( !event.option.value ) {
      this.selectedImages = undefined;
      return;
    }

    const image: Image = event.option.value;
    this.searchInput.setValue( image.name );

    this.selectedImages = image;

  }


}
