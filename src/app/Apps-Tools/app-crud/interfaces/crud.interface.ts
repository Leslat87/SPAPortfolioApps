
export interface Image {

  id:       string;
  name:     string;
  author:   Author;
  nickname: string;
  location: string;
  tags:    string;
  alt_img: any;
}

export enum Author {
  Faren = 'Faren',
  Anonymous = 'Anonymous',
}
