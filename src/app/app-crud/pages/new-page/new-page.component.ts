import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { Image, Author } from '../../interfaces/crud.interface';
import { CrudService } from '../../services/crud.service';
import { filter, switchMap, tap } from 'rxjs';

import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';




@Component({
  selector: 'crud-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent implements OnInit {

  public imageForm = new FormGroup({
    id:               new FormControl<string>(''),
    name:        new FormControl<string>('', {  nonNullable: true }),
    author:        new FormControl<Author>(Author.Faren),
    nickname:        new FormControl<string>(''),
    location: new FormControl(''),
    tags:       new FormControl(''),
    alt_img:          new FormControl(''),


  });

  public authors = [
    { id: 'Faren', desc: 'Faren' },
    { id: 'Anonymous', desc: 'Anonymous' },
  ];

  constructor (
              private crudService: CrudService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private snackbar: MatSnackBar,
              private dialog: MatDialog,
  ) {}

  get currentImage(): Image {
    return this.imageForm.value as Image;
  }

  ngOnInit(): void {

    if ( !this.router.url.includes('edit') ) return;

    this.activatedRoute.params
    .pipe(
      switchMap( ( {id}) => this.crudService.getImageById(id) ),
    ).subscribe ( image => {

      if ( !image ) {
        return this.router.navigateByUrl('/');
      }

      this.imageForm.reset( image );
      return;
    });


  }

  onSubmit(): void {

    if (this.imageForm.invalid) return;

    if (this.currentImage.id){

      this.crudService.updateImage(this.currentImage)
       .subscribe( image => {
        this.showSnackbar(`${image.name} updated! `);
       });

       return;
      }

      this.crudService.addImage(this.currentImage)
       .subscribe( image => {
        this.router.navigate([ '/images/edit', image.id ]);
        this.showSnackbar(`${image.name} created! `);
       });

    }

  onDeleteImage() {
    if (!this.currentImage.id ) throw Error('Image id is required');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.imageForm.value
    });

    dialogRef.afterClosed()
    .pipe(
      filter(( result: boolean) => result),
      switchMap( () => this.crudService.deleteImageById(this.currentImage.id)),
      tap( wasDeleted => console.log({ wasDeleted}) ),
      )
    .subscribe(()  => {
      this.router.navigate(['/images']);
    });

  }



  showSnackbar( message: string): void {
    this.snackbar.open(message, 'Cerrar', {
      duration: 2500,
    })
  }




}
