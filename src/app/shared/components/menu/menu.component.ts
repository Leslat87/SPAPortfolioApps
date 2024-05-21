<<<<<<< Updated upstream
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
=======
import { Component, OnInit, Input } from '@angular/core';

interface MenuItem {
  label: string;
  icon?: string;
  routerLink?: string;
  items?: MenuItem[];
}
>>>>>>> Stashed changes


@Component({
<<<<<<< Updated upstream
    selector: 'shared-menu',
    templateUrl: './menu.component.html',
    styles: ``,
=======
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
>>>>>>> Stashed changes
})

export class MenuComponent {
  public menuItems: MenuItem[] = [];

  constructor() {}

  ngOnInit() {
    this.menuItems = [
      {
<<<<<<< Updated upstream
        label: 'Apis',
        icon: ' pi pi-desktop',
=======
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/home'
      },
      {
        label: 'Apps',
        icon: 'pi pi-desktop',
>>>>>>> Stashed changes
        items: [
          {
            label: 'Crud',
            icon: 'pi pi-fw pi-image',
<<<<<<< Updated upstream
            routerLink: 'crud',
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            icon: ' pi pi-cloud',
            routerLink: 'numbers',
=======
            icon: 'pi pi-cloud',
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            icon: ' pi pi-fw pi-globe',
            routerLink: 'country',
=======
            icon: 'pi pi-fw pi-globe',
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
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
>>>>>>> Stashed changes
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
