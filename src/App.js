import React, { Component } from 'react';
import Menu from './components/Menu';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <header className="App-header">
          <p>hi</p>
          {routes}
        </header>
      </div>
    );
  }
}

export default App;
