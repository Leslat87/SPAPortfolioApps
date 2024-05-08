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
        icon: ' pi pi-desktop',
        items: [
          {
            label: 'Crud',
            icon: 'pi pi-fw pi-image',
            routerLink: 'crud',
            items: [
              {
                label: 'List',
                icon: ' pi pi-fw pi-list',
                routerLink: 'crud/list',
              },
              {
                label: 'New Image',
                icon: ' pi pi-fw pi-images',
                routerLink: 'crud/new-page',
              },
              {
                label: 'Search Images',
                icon: ' pi pi-fw pi-search',
                routerLink: 'crud/search',
              },
            ],
          },
          {
            label: 'Weather',
            icon: ' pi pi-cloud',
            routerLink: 'numbers',
            items: [

              {
                label: 'Search by City',
                icon: ' pi pi-fw pi-home',
                routerLink: 'images',
              },
              {
                label: 'List recent',
                icon: ' pi pi-fw pi-list',
                routerLink: 'numbers',
              },
              {
                label: 'Day by Day',
                icon: ' pi pi-fw pi-calendar',
                routerLink: 'uncommon',
              },

            ],
          },
          {
            label: 'Countries',
            icon: ' pi pi-fw pi-globe',
            routerLink: 'country',
            items: [
              {
                label: 'Search by Capital',
                icon: ' pi pi-fw pi-building',
                routerLink: 'country/capital',
              },
              {
                label: 'Search by Region',
                icon: ' pi pi-fw pi-car',
                routerLink: 'country/region',
              },
              {
                label: 'Search by Country',
                icon: ' pi pi-fw pi-building-columns',
                routerLink: 'country/country',
              },

            ],
          },
          {
            label: 'Gifts',
            icon: ' pi pi-fw pi-palette',
            routerLink: 'gifts',
            // items: [
            //   {
            //     label: 'Recent Search',
            //     icon: ' pi pi-fw pi-image',
            //     routerLink: 'images',
            //   },
            //   {
            //     label: 'Layout',
            //     icon: ' pi pi-fw pi-globe',
            //     routerLink: 'countries',
            //   },

            // ],
          },

        ],
      },
      {
        label: 'Utils',
        icon: ' pi pi-wrench',
        items: [
          {
            label: 'Calculator',
            icon: ' pi pi-calculator',
            routerLink: 'calculator',
          },
          {
            label: 'Tasks Manager',
            icon: ' pi pi-pencil',
            routerLink: 'tasks Manager',
            items: [

              {
                label: 'Tasks',
                icon: ' pi pi-fw pi-list-check',
                routerLink: 'images',
              },
              {
                label: 'Agenda',
                icon: ' pi pi-fw pi-calendar-times',
                routerLink: 'numbers',
              },


            ],
          },
        ],
      },
    ];
  }
}
