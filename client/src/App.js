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
import { firebase, auth } from "./firebase"
// This prevents "App element not defined" warning
import Modal from "react-modal";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      loggedin: false,
      menus: [],
      submenus: "",
      items: [],
      currentModal: String,
      name: "",
      price: "",
      ing: "",
      desc: "",
      note: "",
      // User Authentication
      status: "",
      email: "",
      password: ""
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  };

  componentWillMount() {
    this.checkCookie();
    // This prevents "App element not defined" warning
    Modal.setAppElement("body");
  };

  handleOpenModal() {
    this.setState({ showModal: true });
  };

  handleCloseModal() {
    this.setState({ showModal: false });
  };

  getCookie = (cname) => {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  checkCookie = () => {
    const cookielog = this.getCookie("loggedin");
    if (cookielog != "") {
      this.setState({ loggedin: true });
    };
  };

  setCookie = (cname, cvalue, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  };

  // loadMenus = () => {
  //   API.getMenus()
  //     .then(res => {
  //       this.setState({ menus: res.data });
  //     })
  //     .catch(err => console.log(err));
  // };

  createMenu = event => {
    event.preventDefault();
    let splitSubmenus = this.state.submenus.split(",");
    console.log(splitSubmenus);
    firebase.auth.onAuthStateChanged(function (user) {
      if (user) {
        API.createMenu(user.uid, splitSubmenus)
          .then(function (menu) {
            console.log(menu);
            console.log("created a menu!!!");
          });
      } else {
        // No user is signed in.
      };
    });


  }

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
    // console.log(name, value);
  };

  menuClick = event => {
    const { name } = event.target
    // console.log(name);
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
    console.log("signing in: " + this.state.email);
    // console.log(this.state.email, this.state.password)
    auth
      .doSignInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.setCookie("loggedin", "yes", 30);
        this.setState({
          loggedin: true
        });
        this.handleCloseModal();
      })
      .catch(error => {
        this.state.status = error.message;
        alert(this.state.status);
      });
  };

  handleSignUp(event) {
    event.preventDefault();
    console.log("signing up: " + this.state.email);
    auth().setPersistence(auth.Auth.Persistence.LOCAL)
      .then(function () {
        auth.doCreateUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(() => {
            //this.setCookie("loggedin", "yes", 30);
            this.setState({
              loggedin: true
            });
            this.handleCloseModal();
          })
          .catch(error => {
            this.state.status = error.message;
            alert(this.state.status);
          });
      });
  };

  handleSignOut(event) {
    event.preventDefault();
    console.log("signing out");
    auth
      .doSignOut()
      .then(() => {
        this.setCookie("loggedin", "no", 0);
        this.setState({
          loggedin: false
        });
      });
  };

  render() {
    return (
      <div>
        <Nav
          loggedin={this.state.loggedin}
          menuClick={this.menuClick}
          signOut={this.handleSignOut}
          openOptions={this.openOptions}
        />
        <Container>
          {/* Login Buttons along top right of page */}
          {/* if State.loggedin load menu portion else display home page stuff */}
          {this.state.loggedin == true ? (
            <span>
              <Row>
                <Column size="12">
                  {/* onSubmit on in form for testing. Remove when we figure how to use it in nav */}
                  {/* ONLY IF THEY HAVEN'T ADDED A MENU */}
                  <form>
                    <h4>Create your Menu</h4>
                    <div className="form-row">
                      <div className="form-group col-md-12">
                        <Input type="text" placeholder="Enter your submenus, separated by comma" onChange={this.handleChange} value={this.state.submenus} name="submenus" />
                        <FormBtn onClick={this.createMenu}>Add Menu</FormBtn>
                      </div>
                    </div>
                  </form>
                  <form>
                    <h4>Add a menu item</h4>
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
                        <FormBtn>Save</FormBtn>
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
            handleSignOut={this.handleSignOut}
            handleSignUp={this.handleSignUp}
            handleChange={this.handleChange}
          />
        </Container>
      </div >
    );
  };
};