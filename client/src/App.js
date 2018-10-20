import React, { Component } from "react";
import Nav from "./components/Nav";
// import Jumbotron from "./components/Jumbotron";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import API from "./utils/API";
import ModalConductor from "./components/Modal/Modalconductor";
import Menu from "./components/Menu/Menu";
import NotLoggedIn from "./components/Menu/NotLoggedIn";
import { Input, FormBtn, Textarea } from "./components/Form";
import { firebase, auth } from "./firebase"
import "./index.css";
// This prevents "App element not defined" warning
import Modal from "react-modal";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      loggedin: false,
      uid: "",
      menu: {},
      submenus: "",
      items: [],
      currentModal: String,
      name: "",
      price: "",
      ing: "",
      desc: "",
      note: "",
      itemSubmenu: "",
      // User Authentication
      message: "",
      view: "admin",
      email: "",
      password: ""
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.checkBoxModal = this.checkBoxModal.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
  };

  componentWillMount() {
    // This prevents "App element not defined" warning
    Modal.setAppElement("body");
    this.onAuthStateChanged();
    // Clears values inside input boxes
    this.setState({
      name: "",
      price: "",
      desc: "",
      ing: "",
      note: "",
      itemSubmenu: ""
    });
  };

  //opens modal
  handleOpenModal() {
    this.setState({ showModal: true });
  };

  //closes modal
  handleCloseModal() {
    this.setState({ showModal: false });
  };

  checkBoxModal() {
    if (document.getElementById("viewCheck").checked) {
      this.setState({ view: "client"});
    } else {
      this.setState({ view: "admin"});
    };
  };

  // setting relevant logged / unlogged info
  onAuthStateChanged = () => {
    const bindThis = this;
    firebase.auth.onAuthStateChanged(user => {
      if (user) {
        // console.log(user.uid);
        bindThis.setState({ loggedin: true });
        let userName = document.createTextNode(user.email);
        document.getElementById("email").innerHTML = "";
        document.getElementById("email").appendChild(userName);
        const id = user.uid;
        //need to call API.getMenu or something like that or a function that does the same (loadMenus?) while passing in user.uid as the required param to search the db for
        API.getMenu(id).then(res => { this.setState({ menu: res.data, uid: user.uid }) }
        );

      } else {
        console.log("Please sign-in or sign-up.");
      };
    });
  };

  // create submenus
  createMenu = event => {
    if (event) {
      event.preventDefault();
    };
    let splitSubmenus = this.state.submenus.split(",");
    const bindThis = this;
    this.setState({ submenus: "" });
    // Cleans any extra padding around items
    for (let i = 0; i < splitSubmenus.length; i++) {
      splitSubmenus[i] = splitSubmenus[i].trim();
    };
    // console.log(splitSubmenus);
    firebase.auth.onAuthStateChanged(function (user) {
      if (user) {
        API.createMenu(user.uid, splitSubmenus)
          .then(function (menu) {
            // console.log(menu);
            // console.log("created a menu!!!");
            bindThis.componentWillMount();
          });
      } else {
        // No user is signed in.
      };
    });
  };

  // Called when adding an item via the form
  saveMenuItem = event => {
    event.preventDefault();
    const id = this.state.uid;
    const me = this;
    const data = {
      name: this.state.name,
      ingredients: this.state.ing,
      description: this.state.desc,
      price: this.state.price,
      note: this.state.note,
      itemSubmenu: this.state.itemSubmenu,
      active: true
    };

    if (data.itemSubmenu === "") {
      data.itemSubmenu = this.state.menu.submenu[0];
    };
    // console.log(`MENU ITEM ID:`, id)
    // console.log(`MENU ITEM DATA`, data)
    API.update(id, data)
      .then(function (item) {
        me.onAuthStateChanged();
      });
    this.componentWillMount();
  };

  // Updates active or inactive status
  updateStatus = event => {
    event.preventDefault();
    const id = this.state.uid;
    const me = this;
    // console.log(event.target);
    let activeStatus = event.target.getAttribute("data-active");
    let name = event.target.getAttribute("data-name");
    activeStatus === "false" ? (activeStatus = false) : (activeStatus = true);
    // console.log(activeStatus)
    const data = {
      active: activeStatus,
      name: name
    };
    API.updateStatus(id, data)
      .then(function () {
        me.onAuthStateChanged();
      });
    this.componentWillMount();
  };

  // Generic input field modifier -> state
  handleChange = event => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    // console.log(name, value);
  };

  //quick and dirty lazy fix for setting itemSubmenu
  handleSelectChange = event => {
    this.setState({ itemSubmenu: event.target.value })
  };

  // When clicking the nav menu, sets currentModal to pull the appropriate modal
  menuClick = event => {
    const { name } = event.target
    // console.log(name);
    this.setState({
      currentModal: name,
      showModal: true
    });
  };

  // Called when user submits the login modal
  handleSignIn(event) {
    event.preventDefault();
    auth
      .doSignInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        // console.log("signing in: " + this.state.email);
        this.setState({
          loggedin: true,
          message: ""
        });
        this.handleCloseModal();
      })
      .catch(error => {
        this.setState({ message: error.message });
        const message = document.createTextNode(this.state.message);
        document.getElementById("error").innerHTML = "";
        document.getElementById("error").appendChild(message);
      });
  };

  //Called when the user submits the sign up modal
  handleSignUp(event) {
    event.preventDefault();
    auth
      .doCreateUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        // console.log("signing up: " + this.state.email);
        this.setState({
          loggedin: true,
          message: "",
          submenus: "Appetizers, Entrées, Dessert"
        });
        // Sets the submenu state to three default menus upon creation and adds default menus to each user
        this.createMenu();
        this.handleCloseModal();
      })
      .catch(error => {
        this.setState({ message: error.message })
        const message = document.createTextNode(this.state.message);
        document.getElementById("error").innerHTML = "";
        document.getElementById("error").appendChild(message);
      });
  };

  //Called when clicking the sign out button. 
  handleSignOut(event) {
    event.preventDefault();
    // console.log("signing out");
    auth
      .doSignOut()
      .then(() => {
        this.setState({
          loggedin: false,
          email: "",
          password: ""
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
          {this.state.loggedin === true ? (
            <div className="box">
              <p id="user" className="text-center">Welcome, <span id="email"></span></p>
              <Row>
                <Column size="12">
                  {/* onSubmit on in form for testing. Remove when we figure how to use it in nav */}
                  {/* ONLY IF THEY HAVEN'T ADDED A MENU */}
                  <form className="form">
                    <h4>Create your Menu</h4>
                    <div className="form-row">
                      <div className="form-group col-md-12">
                        <Input type="text" placeholder="Enter your submenus, separated by comma" onChange={this.handleChange} value={this.state.submenus} name="submenus" />
                        <FormBtn onClick={this.createMenu}>Add Menu</FormBtn>
                      </div>
                    </div>
                  </form>
                  <form className="form">
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
                      <div className="form-group col-md-4">

                        <select id="itemSubmenu" className="custom-select custom-select-lg" value={this.state.itemSubmenu} onChange={this.handleSelectChange}>
                          {this.state.menu ? (
                            this.state.menu.submenu ? (
                              this.state.menu.submenu.map(sub => (
                                <option key={sub.toString()} name={this.state.itemSubmenu} value={sub}>{sub}</option>
                              ))) : null)
                            : null
                          }

                        </select>

                        {/* <Input type="text" placeholder="Which submenu does this belong?" onChange={this.handleChange} value={this.state.itemSubmenu} name="itemSubmenu" /> */}
                      </div>
                      <div className="form-group col-md-4">
                        <Textarea type="text" placeholder="Add a note about this item" onChange={this.handleChange} value={this.state.note} name="note" />
                      </div>
                      <div className="form-group col-md-4">
                        <Textarea type="text" placeholder="Description of dish" onChange={this.handleChange} value={this.state.desc} name="desc" />
                        <FormBtn onClick={this.saveMenuItem}>Add</FormBtn>
                      </div>
                    </div>
                  </form>
                </Column>
              </Row>
              {/* default or admin view */}
              {this.state.view === "admin" ? (
                <div className="form">
                  <Row>
                    <Column size="6">
                      <Menu
                        menu={this.state.menu}
                        active={true}
                        updateStatus={this.updateStatus}
                        view={this.state.view}
                      />
                    </Column>
                    <Column size="6">
                      <Menu
                        menu={this.state.menu}
                        active={false}
                        updateStatus={this.updateStatus}
                        view={this.state.view}
                      />
                    </Column>
                  </Row>
                </div>
              ) : (

                // Client view. Doesn't need updatestatus as the buttons will be removed
                  <div className="form">
                    <Row>
                      <Column size="12">
                        <Menu
                          menu={this.state.menu}
                          active={true}
                          view={this.state.view}
                        />
                      </Column>
                    </Row>
                  </div>
                )
              }
            </div>
          ) : (
              <div>
                {/* Else statement for state.loggedin goes here */}
                <NotLoggedIn />
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
            checkBoxModal={this.checkBoxModal}
            view={this.state.view}
          />
        </Container>
      </div >
    );
  };
};