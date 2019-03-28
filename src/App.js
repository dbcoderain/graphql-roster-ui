import React, { Component } from 'react';
import Squads from './Squads';
import { gql } from 'apollo-boost';
import logo from './logo.svg';
import './App.css';

export const ROOT_QUERY = gql`
  query allSquads {
    getSquads {
      _id,
      name
      mission
      members {
        name
        office
        role
      }
    }
  }
`

// const App = () => <Squads />

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Roster</h1>
          <Squads />
        </header>
      </div>
    );
  }
}

export default App;

