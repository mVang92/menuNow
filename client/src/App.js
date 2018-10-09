import React, { Component } from 'react';

import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import Container from './Container';
import Row from './Row';
import Column from './Column';
import API from './utils/API';
import ModalConductor from "./components/Modal/Modalconductor";
import Menu from './components/Menu/Menu';
import { Input, FormBtn } from "./components/Form";

export default class App extends Component {
  state = {
    message: "Search for Articles!",
    loggedin: String,
    menus: [],
    submenus: [],
    items: [],
    currentModal: String
  };

  componentWillMount() {
    this.loadMenus();
  };

  loadMenus = () => {
    API.getMenus()
      .then(res => {
        this.setState({ menus: res.data });
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

  menuClick = event => {
    const name = event.target
    this.setState({
      currentModal: name
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
        <Nav
          loggedin={this.loggedin}
          menuClick={this.menuClick}
        />
        <Container>
          <Row>
            <Column size="12">
              <form>
                <h4> Add a menu item</h4>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="validationDefault01">Name</label>
                    <input type="text" className="form-control" id="validationDefault01" placeholder="Name of dish" value={this.state.name} required />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="validationDefault01">Price</label>
                    <input type="text" className="form-control" id="validationDefault01" placeholder="Price" value={this.state.price} required />

                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="validationDefault01">Ingredients</label>
                    <input type="text" className="form-control" id="validationDefault01" placeholder="List ingredients of dish" value={this.state.ing} required />
                  </div>

                  <div className="form-group col-md-6">
                    <label htmlFor="validationDefault01">Description</label>
                    <textarea type="text" className="form-control" id="validationDefault01" placeholder="Description of dish" value={this.state.desc} required />
                    <button className="btn btn-danger" type="submit">Add</button>
                    <button className="btn btn-success" type="submit">Save</button>
                  </div>
                </div>
              </form>
            </Column>
          </Row>

          <Row>
            {/* Login Buttons along top right of page */}

            <div>

            </div>
            {/* if State.loggedin load menu portion else display home page stuff */}
            <Column size="6">

              <h3 className="heading">Active Menu Goes Here</h3>

              {/* Add a menu component for the active menu */}

            </Column>
            <Column size="6">
              <h3 className="heading">Removed Menu Goes Here</h3>
              {/* Add a Menu Component for the removed menu */}

            </Column>
            {/* Else statement for state.loggedin goes here */}
          </Row>
          <ModalConductor
            currentModal={this.state.currentModal}
          />
        </Container>

      </div>
    );
  };
};