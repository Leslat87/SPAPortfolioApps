import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``,
})
export class MenuComponent {
  public menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Apis',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Crud',
            icon: 'pi pi-fw pi-image',
            routerLink: 'crud',
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
            routerLink: 'weather',
            items: [
              {
                label: 'Search by City',
                icon: 'pi pi-fw pi-home',
                routerLink: 'weather/search-city',
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
            routerLink: 'countries',
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
                routerLink: 'countries/country',
              },
            ],
          },
          {
            label: 'Gifts',
            icon: 'pi pi-fw pi-palette',
            routerLink: 'gifts',
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
            items: [
              {
                label: 'History',
                icon: 'pi pi-fw pi-list-check',
                routerLink: 'calculator/history',
              },
            ]
          },
        ],
      },
    ];
  }
}
