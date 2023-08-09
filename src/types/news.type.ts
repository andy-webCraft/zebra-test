export interface INews {
  name: string;
  code: string;
  previewText: string;
  type: NewsType;
  date: number;
  link: string;
  image: string;
}

export interface NewsType {
  value: string;
  xmlId: string;
}

export interface NewsDate {
  day: number;
  month: string;
  year: number;
}
