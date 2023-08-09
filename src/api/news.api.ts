const baseURL = "http://flems.github.io/test/api/news";

export const newsApi = {
  getNews(page?: number) {
    return fetch(`${baseURL}/${page ? page : ""}`);
  },
};
