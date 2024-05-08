import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../../interfaces/crud.interface';

@Component({
  selector: 'images-crud-card',
  templateUrl: 'card.component.html',
  styles: ``
})
export class CardComponent implements OnInit{

  @Input()

   public image!: Image;

   ngOnInit(): void {
    if (!this.image) throw Error('Image property is required')
  }

}
