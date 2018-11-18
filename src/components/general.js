import { result } from "./location";

export const general = category => {
  let articles = [];
  fetch(
    `https://newsapi.org/v2/top-headlines?country=${result()}&category=${category}&apiKey=e2003c86ce924ed39297bf09a964959d`
  )
    .then(res => res.json())
    .then(json => {
      json.articles.map(item => {
        if (item.urlToImage && item.description) {
          articles.push(item);
        }
      });
    });
  return articles;
};
