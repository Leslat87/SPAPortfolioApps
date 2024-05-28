import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() menuItems: any[] = [];
  isMenuOpen: boolean = false;
  isLargeScreen: boolean = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  constructor() {
    this.checkScreenSize();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  private checkScreenSize() {
    this.isLargeScreen = window.innerWidth > 768; // Tamaño típico para definir "pantallas grandes"
  }
}
