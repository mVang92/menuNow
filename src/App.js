import React, { Component } from 'react';
import Container from './Container';
import Column from './Column';
import Row from './Row';
import Jumbotron from './components/Jumbotron';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron><span className="thin">menu</span><span className="bold">NOW</span></Jumbotron>
        <Container>
        <Row>
          <Column size="md-6" className="d-flex justify-content-middle">
            <p>CONTENT LEFT</p>
          </Column>
          <Column size="md-6">
            <p>CONTENT RIGHT</p>
          </Column>
        </Row>
      </Container>
      </div>
    );
  }
}

export default App;
