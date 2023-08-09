import type { INews } from "./news.type";

export interface NewsResponse {
  nav: PagesNav;
  items: INews[];
}

export interface PagesNav {
  current: number;
  total: number;
}
