import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Image } from '../interfaces/crud.interface';
import { environments } from '../../../environments/environments';

@Injectable({ providedIn: 'root' })
export class CrudService {

  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) { }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(`${this.baseUrl}/images`).pipe(
      map(images => {
        const role = localStorage.getItem('role');
        const user = localStorage.getItem('user');
        const halfIndex = Math.ceil(images.length / 2);

        if (role === 'Admin') {
          return images;
        } else if (user === 'User1') {
          return images.slice(0, halfIndex);
        } else if (user === 'User2') {
          return images.slice(halfIndex);
        } else {
          return [];
        }
      }),
      catchError(error => {
        console.error('Error fetching images', error);
        return of([]);
      })
    );
  }

  getImageById(id: string): Observable<Image | undefined> {
    return this.http.get<Image>(`${this.baseUrl}/images/${id}`)
      .pipe(
        catchError(error => of(undefined))
      );
  }

  getSuggestions(query: string): Observable<Image[]> {
    return this.http.get<Image[]>(`${this.baseUrl}/images?q=${query}&_limit=6`);
  }

  addImage(image: Image): Observable<Image> {
    return this.http.post<Image>(`${this.baseUrl}/images`, image);
  }

  updateImage(image: Image): Observable<Image> {
    if (!image.id) throw new Error('Image id is required');
    return this.http.patch<Image>(`${this.baseUrl}/images/${image.id}`, image);
  }

  deleteImageById(id: string): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/images/${id}`)
      .pipe(
        map(resp => true),
        catchError(err => of(false)),
      );
  }
}
