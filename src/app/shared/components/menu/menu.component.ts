import { Component, OnInit, Input } from '@angular/core';

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

  constructor() {}

  ngOnInit() {
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
            routerLink: 'tasks',
          },
          {
            label: 'Calculator',
            icon: 'pi pi-calculator',
            routerLink: 'calculator',
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
}
