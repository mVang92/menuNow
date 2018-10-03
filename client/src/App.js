import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron';
import Container from './Container';
import Row from './Row';
import Column from './Column';
import API from './utils/API';
import Article from './components/Article';
import { Input, FormBtn } from "./components/Form";
import DeleteBtn from './components/DeleteBtn';
import SavedArticle from './components/SavedArticles';

export default class App extends Component {
  state = {
    message: "Search for Articles!",
    loggedin: String,
    menus: [],
    submenus: [],
    items: [],
    savedArticles: []
  };

  componentWillMount() {
    this.loadMenus();
  };

  loadMenus = () => {
    API.getArticles()
      .then(res => {
        this.setState({ savedArticles: res.data });
      })
      .catch(err => console.log(err));
  };

  handleChange = event => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
      message: ""
    });
  };

  saveMenu = event => {
    event.preventDefault();
    let { id } = event.target;
    let selectedArticle = this.state.articles.filter(article => id === article._id);
    // Remove the selected Article from the current Articles state (to remove it from the list)

    for (var i = 0; i < this.state.articles.length - 1; i++) {
      if (this.state.articles[i]._id === id) {
        this.state.articles.splice(i, 1);
        console.log('removed from searched list');
      };
    };

    const data = {
      key: selectedArticle[0]._id,
      url: selectedArticle[0].web_url,
      headline: selectedArticle[0].headline.main,
      snippet: selectedArticle[0].snippet,
      author: (selectedArticle[0].byline ? selectedArticle[0].byline.original : 'No author documented'),
      note: this.state.note
    };

    console.log(data);
    API.save(data).then(() => { this.loadArticles() });
  };

  render() {
    return (
      <div>
        <Jumbotron>MenuNOW</Jumbotron>
        <Container>
          <Row>
            {/* Login Buttons along top right of page */}
            <div>

            </div>
            {/* if State.loggedin load menu portion else display home page stuff */}
            <Column size="6">
              <h3 className="heading">Active Menu Goes Here</h3>
              {/* Add a menu component for the active menu */}

              {/* <div style={{ paddingTop: 50 }}>
                {this.state.articles.map((article, i) => {
                  return (
                    <div>
                      <Article
                        id={i}
                        key={article._id}
                        url={article.web_url}
                        headline={article.headline.main}
                        snippet={article.snippet}
                        byline={(article.byline ? article.byline.original : 'No author documented')}
                        save={<FormBtn id={article._id} onClick={this.saveArticle}>Save Article</FormBtn>}
                        textArea={<textarea onChange={this.handleChange} name="note" className="form-control" rows="3"></textarea>}
                      />
                    </div>
                  )
                })}
              </div> */}
            </Column>
            <Column size="6">
              <h3 className="heading">Removed Menu Goes Here</h3>
              {/* Add a Menu Component for the removed menu */}

              {/* {this.state.savedArticles.length ? (
                <div>
                  {this.state.savedArticles.map((savedArticle, i) => {
                    return (
                      <SavedArticle
                        key={i}
                        href={savedArticle.url}
                        headline={savedArticle.headline}
                        snippet={savedArticle.snippet}
                        byline={savedArticle.author}
                        btn={<DeleteBtn id={savedArticle._id} onClick={this.deleteArticle} />}
                        id={savedArticle._id}
                        note={savedArticle.note}
                        date={savedArticle.date}
                      />
                    )
                  })}
                </div>
              ) : (
                  <h3 className="text-center">No Saved Articles</h3>
                )} */}
            </Column>
          </Row>
        </Container>
      </div>
    );
  };
};
