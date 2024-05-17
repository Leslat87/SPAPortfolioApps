import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent {
  @Output() search = new EventEmitter<string>();
  searchTerm: string = '';

  onSearch() {
    this.search.emit(this.searchTerm);
  }
}
