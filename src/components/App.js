import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import NavBar from './NavBar';
import Section from './Section';
import Form from './Form';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Section />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
