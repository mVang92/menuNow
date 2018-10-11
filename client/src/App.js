import React, { Component } from "react";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import API from "./utils/API";
import ModalConductor from "./components/Modal/Modalconductor";
import Menu from "./components/Menu/Menu";
import { Input, FormBtn, Textarea } from "./components/Form";
import { auth } from "./firebase"


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      loggedin: false,
      menus: [],
      submenus: [],
      items: [],
      currentModal: String,
      name: "",
      price: "",
      ing: "",
      desc: "",
      note: "",
      // User Authentication
      email: '',
      password: ''
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  };

  handleOpenModal() {
    this.setState({ showModal: true });
  };

  handleCloseModal() {
    this.setState({ showModal: false });
  };

  // componentWillMount() {
  //   this.loadMenus();
  // };

  // loadMenus = () => {
  //   API.getMenus()
  //     .then(res => {
  //       this.setState({ menus: res.data });
  //     })
  //     .catch(err => console.log(err));
  // };

  saveMenuItem = event => {
    event.preventDefault();
    const data = {
      _creator: null,
      name: this.state.name,
      ing: this.state.ing,
      desc: this.state.desc,
      price: this.state.price,
      note: this.state.note
    };
    API
      .save(data)
      .then(function () {
        console.log("saved an item!!!");
      });
  };

  handleChange = event => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    })
    console.log(name, value);
  };

  menuClick = event => {
    const { name } = event.target
    console.log(name);
    this.setState({
      currentModal: name,
      showModal: true
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
        console.log("removed from searched list");
      };
    };

    const data = {
      key: selectedArticle[0]._id,
      url: selectedArticle[0].web_url,
      headline: selectedArticle[0].headline.main,
      snippet: selectedArticle[0].snippet,
      author: (selectedArticle[0].byline ? selectedArticle[0].byline.original : "No author documented"),
      note: this.state.note
    };

    console.log(data);
    API.save(data).then(() => { this.loadArticles() });
  };

  handleSignIn(event) {
    event.preventDefault();
    this.handleCloseModal();
    // console.log(this.state.email, this.state.password)
    auth.doSignInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.setState({
          loggedin: true
        });
      }
      )
  }

  handleSignUp(event) {
    event.preventDefault();
    // this.handleCloseModal();
    console.log("email: " + this.state.email);
    console.log("password: " + this.state.password);
    auth.doCreateUserWithEmailAndPassword(this.state.email, this.state.password)
      // .then(() => {
      //   this.setState({
      //     loggedin: true
      //   });
      // }
      // )
  }

  render() {
    return (
      <div>
        <Nav
          loggedin={this.state.loggedin}
          menuClick={this.menuClick}
        />
        <Container>
          {/* Login Buttons along top right of page */}
          {/* if State.loggedin load menu portion else display home page stuff */}
          {this.state.loggedin == true ? (
            <span>
              <Row>
                <Column size="12">
                  <form>
                    <h4> Add a menu item</h4>
                    <div className="form-row">
                      <div className="form-group col-md-5">
                        <Input type="text" placeholder="Name of dish" onChange={this.handleChange} value={this.state.name} name="name" />
                      </div>
                      <div className="form-group col-md-2">
                        <Input type="text" placeholder="Price" onChange={this.handleChange} value={this.state.price} name="price" />
                      </div>
                      <div className="form-group col-md-5">
                        <Input type="text" placeholder="List ingredients of dish" onChange={this.handleChange} value={this.state.ing} name="ing" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <Textarea type="text" placeholder="Add a note about this item" onChange={this.handleChange} value={this.state.note} name="note" />
                      </div>
                      <div className="form-group col-md-6">
                        <Textarea type="text" placeholder="Description of dish" onChange={this.handleChange} value={this.state.desc} name="desc" />
                        <FormBtn onClick={this.saveMenuItem}>Add</FormBtn>
                        <FormBtn >Save</FormBtn>
                      </div>
                    </div>
                  </form>
                </Column>
              </Row>
              <Row>
                <Column size="6">
                  <h3 className="heading">Active Menu Goes Here</h3>
                  {/* Add a menu component for the active menu */}

                </Column>
                <Column size="6">
                  <h3 className="heading">Removed Menu Goes Here</h3>
                  {/* Add a Menu Component for the removed menu */}

                </Column>
              </Row>
            </span>
          ) : (
              <div>
                {/* Else statement for state.loggedin goes here */}
                <h3 className="text-center">The Not Logged In Section Will Go Here</h3>
              </div>
            )
          }

          <ModalConductor
            currentModal={this.state.currentModal}
            handleOpenModal={this.handleOpenModal}
            handleCloseModal={this.handleCloseModal}
            showModal={this.state.showModal}
            handleSignIn={this.handleSignIn}
            handleSignUp={this.handleSignUp}
            handleChange={this.handleChange}
          />
        </Container>
      </div >
    );
  };
};