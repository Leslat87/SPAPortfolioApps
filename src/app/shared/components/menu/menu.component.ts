import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

interface MenuItem {
  label: string;
  icon?: string;
  routerLink?: string;
  items?: MenuItem[];
}

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input()
  public menuItems: MenuItem[] = [];

  public isMobileMenuVisible: boolean = false;
  public activeSubMenu: string | null = null;
  private userId: string | null = null;
  private role: string | null = null;

  constructor(private AuthService: AuthService, private router: Router) {}

  ngOnInit() {
     // Obtener el userId y role de localStorage
     this.userId = localStorage.getItem('userId');
     this.role = localStorage.getItem('role');

     // Configurar los elementos del menú con enlaces dinámicos
    this.menuItems = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/home'
      },
      {
        label: 'Apps',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Crud',
            icon: 'pi pi-fw pi-image',
            routerLink: 'crud'
          },
          {
            label: 'Weather',
            icon: 'pi pi-cloud',
            routerLink: 'weather'
          },
          {
            label: 'Countries',
            icon: 'pi pi-fw pi-globe',
            routerLink: 'countries'
          },
          {
            label: 'Gifs',
            icon: 'pi pi-fw pi-palette',
            routerLink: 'gifs',
          },
        ],
      },
      {
        label: 'Utils',
        icon: 'pi pi-wrench',
        items: [
          {
            label: 'Tasks',
            icon: 'pi pi-pencil',
            routerLink:  this.userId ? `/tasks/${this.userId}` : '/tasks',
          },
          {
            label: 'Calculator',
            icon: 'pi pi-calculator',
            routerLink: this.userId ? `/calculator/${this.userId}` : '/calculator',
          }
        ]
      },
      {
        label: 'About',
        icon: 'pi pi-fw pi-info',
        routerLink: '/about',
      },
      {
        label: 'Contact',
        icon: 'pi pi-fw pi-envelope',
        routerLink: '/contact',
      },
    ];
  }

  toggleMobileMenu(): void {
    this.isMobileMenuVisible = !this.isMobileMenuVisible;
  }

  toggleSubMenu(label: string): void {
    this.activeSubMenu = this.activeSubMenu === label ? null : label;
  }

  logout(): void {
    this.AuthService.logout();
    this.router.navigate(['/auth/login']);
  }
}
