import React, { Component } from 'react';
import GiphBtns from "./components/GiphBtns";
import { Container, Row, Col } from 'reactstrap';
import "./App.css";


class App extends Component {
  render() {
    return (
      <Container className='body'>
        <h1>Hello World!</h1>
        < GiphBtns />
      </Container>
    );
  }
}

export default App;
