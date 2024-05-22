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
            items: [
              {
                label: 'List',
                icon: 'pi pi-fw pi-list',
                routerLink: 'crud/list',
              },
              {
                label: 'New Image',
                icon: 'pi pi-fw pi-images',
                routerLink: 'crud/new-page',
              },
              {
                label: 'Search Images',
                icon: 'pi pi-fw pi-search',
                routerLink: 'crud/search',
              },
            ],
          },
          {
            label: 'Weather',
            icon: 'pi pi-cloud',
            items: [
              {
                label: 'Search by City',
                icon: 'pi pi-fw pi-home',
                routerLink: 'weather/search',
              },
              {
                label: 'List recent',
                icon: 'pi pi-fw pi-list',
                routerLink: 'weather/list-recent',
              },
              {
                label: 'Day by Day',
                icon: 'pi pi-fw pi-calendar',
                routerLink: 'weather/day-by-day',
              },
            ],
          },
          {
            label: 'Countries',
            icon: 'pi pi-fw pi-globe',
            items: [
              {
                label: 'Search by Capital',
                icon: 'pi pi-fw pi-building',
                routerLink: 'countries/capital',
              },
              {
                label: 'Search by Region',
                icon: 'pi pi-fw pi-car',
                routerLink: 'countries/region',
              },
              {
                label: 'Search by Country',
                icon: 'pi pi-fw pi-building-columns',
                routerLink: 'countries',
              },
            ],
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
    const menu = document.querySelector('.mobile-menu');
    if (menu) {
      menu.classList.toggle('hidden');
    }
  }
}
