import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

import { Image } from '../interfaces/crud.interface';
import { environments } from '../../environments/environments';



@Injectable({ providedIn: 'root' })
export class CrudService {

  private baseUrl: string = environments.baseUrl;


  constructor(private http: HttpClient) { }


  getImages():Observable<Image[]> {
    return this.http.get<Image[]>(`${ this.baseUrl }/images`);
  }

  getImageById( id: string ): Observable<Image|undefined> {
    return this.http.get<Image>(`${ this.baseUrl }/images/${ id }`)
      .pipe(
        catchError( error => of(undefined) )
      );
  }

  getSuggestions( query: string ): Observable<Image[]> {
    return this.http.get<Image[]>(`${ this.baseUrl }/images?q=${ query }&_limit=6`);
  }

  addImage(image: Image): Observable<Image> {
    return this.http.post<Image>(`${ this.baseUrl }/images`, image);
  }

  updateImage(image: Image): Observable<Image> {
      if (!image.id) throw Error('Image id is requiered');
      return this.http.patch<Image>(`${ this.baseUrl }/images/${ image.id }`, image);

  }

  deleteImageById(id: string): Observable<boolean> {


    return this.http.delete(`${ this.baseUrl }/images/${ id }`)
    .pipe(
      map( resp => true),
      catchError( err => of(false) ),
    )
}


}
