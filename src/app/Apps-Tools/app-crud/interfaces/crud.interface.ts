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
