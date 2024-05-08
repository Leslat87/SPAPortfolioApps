//TODO: Cambiar los campos de nuestro CRUD

export interface Image {
  id: string;
  name: string;
  author: Author;
  nickname: string;
  location: string;
  tags: string;
  alt_img?: string;
}

export enum Author {
  Faren = 'Faren',
  Anonymous = 'Anonymous',
}

//TODO: ejemplo de Anterior interface
  // "id": "dc-superman",
  // "superhero": "Superman",
  // "publisher": "DC Comics",
  // "alter_ego": "Kal-El",
  // "first_appearance": "Action Comics #1",
  // "characters": "Kal-El",
  // "alt_img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_vx198UiG5NH3paSCGX8oOB-BsRSqmHg3LJtsnxai5A&s"

