// src/app/Apps-Tools/app-crud/interfaces/crud.interface.ts
export interface Image {
  id: string;
  name: string;
  author: Author;
  nickname: string;
  location: string;
  tags: string;
  alt_img?: string;
  descripcion: string; // Agregar el campo descripcion
}

export enum Author {
  Faren = 'Faren',
  Anonymous = 'Anonymous',
}
