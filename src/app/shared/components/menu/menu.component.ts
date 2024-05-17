// src/app/shared/components/menu/menu.component.ts
import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input()
  public menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: 'home'
      },
      {
        label: 'Apps',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Crud',
            icon: 'pi pi-fw pi-image',
            routerLink: 'crud/list',
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
        routerLink: 'about',
      },
      {
        label: 'Contact',
        icon: 'pi pi-fw pi-envelope',
        routerLink: 'contact',
      },
    ];
  }
}
