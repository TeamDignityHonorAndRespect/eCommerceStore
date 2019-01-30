import React, { Component } from 'react';
import Menu from './components/Menu';
import routes from './routes';
import GridExampleGrid from './components/Grid'
import { connect } from "react-redux";
import { getUsers } from "./reducers/main";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    this.props.getUsers().then(resp => this.setState({ users: resp.value.data }))
  }
  render() {

    return (
      <div className="App">
        <Menu />
        <div className="routesWrapper grid-container">
          {routes}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {
  getUsers
})(App);
