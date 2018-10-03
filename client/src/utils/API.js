import axios from "axios";
let BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=be69431c492a4ed5ac4fc06c5f62ac03&q=";

export default {
  search: query => {
    let q = query.query.replace(" ", "+");
    const url = `${BASEURL}${q}+${query.start}+${query.end}`
    return axios.get(url);
  },
  getArticles: () => { 
    return (
      axios.get('/api/articles')
    ) 
  },
  save: data => {
    return (
      console.log('data', data.headline),
      axios.post(`/api/articles`, {
        key: data._id,
        url: data.url,
        headline: data.headline,
        snippet: data.snippet,
        author: data.author,
        note: data.note
      })
      .catch(function (error) {
        console.log(error);
      })
    )
  },
  delete: id => {
    return (
      axios.delete(`/api/articles/${id}`)
    )
  }
};
