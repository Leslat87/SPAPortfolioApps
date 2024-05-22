import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private isMobileMenuVisible = false;

  toggleMobileMenu(): void {
    this.isMobileMenuVisible = !this.isMobileMenuVisible;
  }

  getMobileMenuState(): boolean {
    return this.isMobileMenuVisible;
  }
}
