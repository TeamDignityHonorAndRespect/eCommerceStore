import React, { Component } from 'react';
import Menu from './components/Menu';
import routes from './routes';
import GridExampleGrid from './components/Grid'
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <div className="routesWrapper grid-container">
          {routes}
          <GridExampleGrid />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {
  //nothing yet
})(App);
