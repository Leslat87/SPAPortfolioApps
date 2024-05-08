import { Pipe, PipeTransform } from '@angular/core';
import { Image } from '../app-crud/interfaces/crud.interface';

@Pipe({
  name: 'imageImage'
})
export class CrudImagePipe implements PipeTransform {

  transform( image: Image ): string {

    if ( !image.id && !image.alt_img ) {
      return 'assets/no-image.png';
    }

    if ( image.alt_img ) return image.alt_img; // https:///google.com/flash.png

    return `assets/ImagesCrud/${ image.id }.jpg`;

  }

}
