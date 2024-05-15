import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  ngOnInit(): void {
    // Coloca aquí el código que deseas ejecutar cuando el componente se inicialice
    console.log('El componente FooterComponent se ha inicializado.');
  }

}
