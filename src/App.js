import React, { Component } from 'react';
import Menu from './components/Menu';
import routes from './routes';
import GridExampleGrid from './components/Grid'

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

export default App;
